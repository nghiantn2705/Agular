import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  productForm !: FormGroup;
  titleBtn:string = "Add"
  actionBtn: string = "Save"
  actionBtn1: string = "add"
  constructor(private FormBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<AddComponent>) { }

  ngOnInit(): void {
    this.productForm = this.FormBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      imgUrl: ['', Validators.required],
      brand: ['', Validators.required],
      desc: ['', Validators.required],
      category: ['', Validators.required],
    });

    console.log(this.editData);
    if (this.editData) {
      this.titleBtn = "Update"
      this.actionBtn = "Update";
      this.actionBtn1 = "update";
      this.productForm.controls['name'].setValue(this.editData.name);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['desc'].setValue(this.editData.desc);
      this.productForm.controls['imgUrl'].setValue(this.editData.imgUrl);
      this.productForm.controls['brand'].setValue(this.editData.brand);
      this.productForm.controls['category'].setValue(this.editData.category);
    }

  }

  addProduct() {
    console.log(this.productForm.value);
    if (!this.editData) {
      if (this.productForm.valid) {
        this.api.postProduct(this.productForm.value)
          .subscribe({
            next: (res) => {
              alert("Product added succesfully");
              this.productForm.reset();
              this.dialogRef.close('save');
            },
            error: () => {
              alert("Error while adding the product")
            }
          })
      }
    } else {
      this.updateProduct()
    }
  }
  updateProduct() {
    this.api.putProduct(this.productForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Product Update Succesfully")
          this.productForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert("Error while updating the record!..")
        }
      })
  }

}

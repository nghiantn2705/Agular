import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  imgs = [];
  myFiles:string [] = [];
  productForm!: FormGroup;
  actionBtn: string = 'Save';
  actionBtn1: string = 'add';
  constructor(
    private http: HttpClient,
    private FormBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<AddComponent>
  ) {}

  ngOnInit(): void {
    this.productForm = this.FormBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      imgs: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: ['', Validators.required],
      type: ['', Validators.required],
      sex: ['', Validators.required],
    });

    if (this.editData) {
      this.actionBtn = 'Update';
      this.actionBtn1 = 'update';
      this.productForm.controls['name'].setValue(this.editData.name);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['description'].setValue(
        this.editData.description
      );
      this.productForm.controls['imgs'].setValue(this.editData.imgs);
      this.productForm.controls['categoryId'].setValue(
        this.editData.categoryId
      );
      this.productForm.controls['type'].setValue(this.editData.category);
      this.productForm.controls['sex'].setValue(this.editData.category);
    }
  }

  get f(): any {
    return this.productForm.controls;
  }

  onFileChange(event: any) {
    console.log(event);
    
    for (var i = 0; i < event.target.imgs.length; i++) {
      this.productForm.value.imgs.push(event.target.files[i]);
    }
    console.log(this.myFiles);
    
  }

  addProduct() {
    const formData = new FormData();
    console.log(this.productForm.value);
    this.productForm.value.imgs = this.productForm.value.imgs.split(',');
    console.log(this.productForm.value);
    
    console.log(this.myFiles);
    if (!this.editData) {
      if (this.productForm.valid) {
        this.api.postProduct(this.productForm.value).subscribe({
          next: (res) => {
            alert('Product added succesfully');
            this.productForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('Error while adding the product');
          },
        });
      }
    } else {
      this.updateProduct();
    }
  }
  updateProduct() {
    
    this.api.putProduct(this.productForm.value, this.editData.id).subscribe({
      next: (res) => {
        alert('Product Update Succesfully');
        this.productForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert('Error while updating the record!..');
      },
    });
  }
}

import { Component,OnInit,Inject } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-addcategories',
  templateUrl: './addcategories.component.html',
  styleUrls: ['./addcategories.component.scss']
})
export class AddcategoriesComponent {
  titleBtn : string = "Add"
  cateForm !: FormGroup;
  actionBtn : string = "Save"
  constructor(private FormBuilder : FormBuilder,
    private api:ApiService,
    @Inject(MAT_DIALOG_DATA) public editData:any,
     private dialogRef : MatDialogRef<AddcategoriesComponent>){}

  ngOnInit():void{
    this.cateForm = this.FormBuilder.group({
      cateName:['',Validators.required],
      
    });

    console.log(this.editData);
    if(this.editData){
      this.actionBtn = "Update";
      // this.productForm.controls['productName'].setValue(this.editData.productName);
      this.cateForm.controls['cateName'].setValue(this.editData.cateName)
    }
    
  }

  addProduct(){
    console.log(this.cateForm.value);
    if(this.editData){
      if(this.cateForm.valid){
        this.api.postCate(this.cateForm.value)
        .subscribe({
          next:(res:any)=>{
            alert("Cate added succesfully");
            this.cateForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("Error while adding the Cate")
          }
        })
      }
    }else{
      this.updateProduct()
    }
  }
  updateProduct(){
    this.api.putCate(this.cateForm.value,this.editData.id)
    .subscribe({
      next:(res:any)=>{
        alert("Product Update Succesfully")
        this.cateForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while updating the record!..")
      }
    })
  }
}

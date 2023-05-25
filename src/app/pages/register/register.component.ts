import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from 'src/app/admin/services/login.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userForm !: FormGroup;

  constructor(private FormBuilder: FormBuilder,
    private api: LoginService, 
   @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<RegisterComponent>) { }

  ngOnInit(): void {
    this.userForm = this.FormBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
     
    });
}
registerUser() {
  console.log(this.userForm.value);
    if (this.userForm.valid) {
      this.api.registerUser(this.userForm.value)
        .subscribe({
          next: (res) => {
            alert("Product added succesfully");
            this.userForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert("Error while adding the product")
          }
        })
    }
  } 

}


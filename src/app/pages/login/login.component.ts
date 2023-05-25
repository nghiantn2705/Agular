import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { MatDialogRef,MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent  implements OnInit  {
  loginForm !: FormGroup;
  errorMessage !: string;

  constructor(private fb: FormBuilder, private login: MatDialog,private http: HttpClient,private router: Router,private dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  openDialog1() {
    this.login.open(RegisterComponent, {
      width: '30%',
    })
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.controls['username'].value;
      const password = this.loginForm.controls['password'].value;
      this.http.get<any>('http://localhost:3000/users?username=' + username + '&password=' + password)
        .subscribe((response) => {
          if (response.length > 0) {
            // Dang nhap thanh cong
            alert('Logged in successfully');
            this.router.navigate(['/admin/admin'])
            this.dialogRef.close('save');
          } else {
            this.errorMessage = 'Invalid email or password';
            alert('Invalid email or password')
          }
        }, (error) => {
          this.errorMessage = error.message;
        });
    }
  }
}

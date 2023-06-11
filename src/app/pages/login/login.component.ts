import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
 
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,

  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    if (email && password) {
      this.authService.login(email, password).subscribe(
        () => {
          alert("Bạn đã đăng nhập thành công");
        },
        (error) => {
          alert("Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin đăng nhập.");
        }
      );

   
    
  
    }
  }
  
  
  
}

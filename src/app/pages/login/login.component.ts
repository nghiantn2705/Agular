import { Component } from '@angular/core';
import { LoginService } from 'src/app/admin/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   username: string ="";
  password: string ="";
  message: string ="";

  constructor(private authService: LoginService) {}

  onSubmit() {
    this.authService.loginUser(this.username, this.password).subscribe(
      (users) => {
        if (users.length > 0) {
          // Login successful
          console.log('Login successful');
        } else {
          // Login failed
          this.message = 'Invalid username or password';
        }
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}

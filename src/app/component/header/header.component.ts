import { Component } from '@angular/core';
import { ApiService } from 'src/app/admin/services/api.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from 'src/app/admin/services/login.service';
import { AuthService } from '../../pages/auth.service';
import { LoginComponent } from 'src/app/pages/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private login: MatDialog, private api: LoginService,public authService: AuthService) {

  }
onLogOut(): void {
  this.authService.logout();
}
 
}
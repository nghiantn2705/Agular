import { Component } from '@angular/core';
import { ApiService } from 'src/app/admin/services/api.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from 'src/app/admin/services/login.service';
import { RegisterComponent } from 'src/app/pages/register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private resgister: MatDialog, private api: LoginService) {

  }
  openDialog() {
    this.resgister.open(RegisterComponent, {
      width: '30%',

    })
  }
}

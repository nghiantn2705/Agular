import { Component } from '@angular/core';
import { Users } from './common/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  users : Users={
    name:'Nghia Ngo',
    age:20,
    address: "Viet Nam"
  }
}

import { Component } from '@angular/core';
import { ServicepageService } from '../servicepages/servicepage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private api:ServicepageService ) {}
  ngOnInit(): void {
    this.getAllProduct();
  }
  products:any
  getAllProduct() {
    this.api.getProduct().subscribe({
      next: (res) => {
        this.products = res
      },
      error: () => {
        alert('Error while fetching the Records!...');
      },
    });
  }
  
}
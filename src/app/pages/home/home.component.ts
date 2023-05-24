
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiService } from 'src/app/admin/services/api.service';
import { CartserviceService } from 'src/app/shopingcart/servicecart/cartservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cartItem: any[] = [];
  displayedColumns: string[] = [
    'name',
    'price',
    'desc',
    'imgUrl',
    'category',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private add: MatDialog, private api: ApiService,private CartserviceService: CartserviceService) {}
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
  toggleDescription(product: any) {
    product.isDescriptionVisible = !product.isDescriptionVisible;
  }
  addToCart(pro: any): void {
    this.CartserviceService.addToCart(pro).subscribe(response => {
      if (response.quantity > 0) {
        console.log('Product added to cart:', response);
      }
    });
  }
  getCartItems(): void {
    this.CartserviceService.getCartItems().subscribe(cartItem => {
      this.cartItem = cartItem;
    });
  }
}

import { Component } from '@angular/core';
import { ServicepageService } from '../servicepages/servicepage.service';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-boyproduct',
  templateUrl: './boyproduct.component.html',
  styleUrls: ['./boyproduct.component.scss']
})
export class BoyproductComponent {
  constructor(private api: ServicepageService) {}
  ngOnInit(): void {
    this.getAllProduct();
  }
  products: any;
  currentPageIndex: number = 0;
  itemsPerPage: number = 20;
  totalItems: number = 0;
  pageSizeOptions: number[] = [10, 20, 30];
  pagedProducts: any[] = [];

  getAllProduct() {
    this.api.getProduct().subscribe({
      next: (res: any) => {
        this.products = res;
        this.totalItems = this.products.length;
        this.updatePagedProducts();
      },
      error: () => {
        alert('Error while fetching the Records!...');
      },
    });
  }

  onPageChange(event: PageEvent) {
    this.currentPageIndex = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.updatePagedProducts();
  }

  updatePagedProducts() {
    const startIndex = this.currentPageIndex * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedProducts = this.products.slice(startIndex, endIndex);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ServicepageService } from '../servicepages/servicepage.service';
import { DialogComponent } from './chonsizegiay.service';

interface Comment {
  author: string;
  text: string;
  timestamp: string;
}

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-deital-product',
  templateUrl: './deital-product.component.html',
  styleUrls: ['./deital-product.component.scss']
})
export class DeitalProductComponent implements OnInit {
  product: any;
  images: any;
  img: any;
  categoryname: any;
  mainImage: string = "";
  thumbnails: string[] = [];
  products: any[] = [];
  selectedSex: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private dialog: MatDialog,
    private api: ServicepageService
  ) {
    this.products = []; 
    this.selectedSex = 'Nam'; 
  }

  ngOnInit(): void {
    this.getAllProduct();
    const productId = this.route.snapshot.paramMap.get('_id');
    console.log(productId);

    this.http.get<any>(`http://localhost:8088/api/products/${productId}`).subscribe((data) => {
      this.product = data;
      console.log(data);

      this.images = data.imgs;
      console.log(this.images);

      this.categoryname = data.categoryId.name;
      console.log(this.categoryname);

      this.thumbnails = this.images.map((image: any) => image);
      console.log(this.thumbnails);

      this.mainImage = this.thumbnails[this.thumbnails.length - 1];
    });
  }

  changeImage(imagePath: string) {
    this.mainImage = imagePath;
  }

  previousImage() {
    const currentIndex = this.thumbnails.indexOf(this.mainImage);
    const previousIndex = (currentIndex - 1 + this.thumbnails.length) % this.thumbnails.length;
    this.mainImage = this.thumbnails[previousIndex];
  }

  nextImage() {
    const currentIndex = this.thumbnails.indexOf(this.mainImage);
    const nextIndex = (currentIndex + 1) % this.thumbnails.length;
    this.mainImage = this.thumbnails[nextIndex];
  }

  dialogOpened = false;
  dialogTitle = '';
  dialogMessage = '';

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '520px',
      data: {}
    });
  }

  getAllProduct() {
    this.api.getProduct().subscribe({
      next: (res: any) => {
        if (Array.isArray(res) && res.length >= 5) {
          this.products = res.slice(0, 4);
        }
      },
      error: () => {
        alert('Error while fetching the Records!...');
      },
    });
  }
}

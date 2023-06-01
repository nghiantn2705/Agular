import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ViewChild, TemplateRef } from '@angular/core';
import { DialogComponent } from './chonsizegiay.service';
import { MatDialog } from '@angular/material/dialog';
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
  mainImage: string = "";
  thumbnails: string[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient,private dialog: MatDialog) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`http://localhost:3000/productList/${productId}`).subscribe(data => {
      this.product = data;
      this.images = data.images;

      this.thumbnails = this.images.map((image: any) => image.images_url);
      this.mainImage = this.thumbnails[0];
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
  dialogOpened: boolean = false;
  dialogTitle: string = '';
  dialogMessage: string = '';

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '520px',
      data: {
       
      }
    });
  }

}






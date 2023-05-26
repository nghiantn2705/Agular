
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './ProductService';
import { Products } from 'src/app/common/products';
import { ActivatedRoute } from '@angular/router';
interface Comment {
  author: string;
  text: string;
  timestamp: string;
}
@Component({
  selector: 'app-deital-product',
  templateUrl: './deital-product.component.html',
  styleUrls: ['./deital-product.component.scss']
})
export class DeitalProductComponent {
 
  selected = 'option1';
  selected2 = 'option1';
  // mainImage: string;
  thumbnails: string[] = [
    'https://admin.thegioigiay.com/upload/product/2023/05/giay-the-thao-nam-nike-air-jordan-1-retro-low-og-doernbecher-fd9665-351-phoi-mau-38-5-645eee8896f4d-13052023085728.jpg',
    'https://admin.thegioigiay.com/upload/product/2023/05/giay-the-thao-nam-nike-air-jordan-1-retro-low-og-doernbecher-fd9665-351-phoi-mau-38-5-645eee88a396f-13052023085728.jpg',
    'https://admin.thegioigiay.com/upload/product/2023/05/giay-the-thao-nam-nike-air-jordan-1-retro-low-og-doernbecher-fd9665-351-phoi-mau-38-5-645eee88ab5d1-13052023085728.jpg',
    'https://admin.thegioigiay.com/upload/product/2023/05/giay-the-thao-nam-nike-air-jordan-1-retro-low-og-doernbecher-fd9665-351-phoi-mau-38-5-645eee88b696e-13052023085728.jpg'
  ];

  // constructor() {
  //   this.mainImage = this.thumbnails[0]; // Hiển thị ảnh đầu tiên khi trang được tải
  // }

  // changeImage(imagePath: string) {
  //   this.mainImage = imagePath; // Thay đổi ảnh chính khi click vào thumbnail
  // }
  // currentIndex = 0;
  // nextImage() {
  //   this.currentIndex++;
  //   if (this.currentIndex >= this.thumbnails.length) {
  //     this.currentIndex = 0;
  //   }
  //   this.mainImage = this.thumbnails[this.currentIndex];
  // }
  // previousImage() {
  //   this.currentIndex = (this.currentIndex - 1 + this.thumbnails.length) % this.thumbnails.length;
  //   this.mainImage = this.thumbnails[this.currentIndex]; // Chuyển đổi sang ảnh trước đó
  // }



  // toggleComments() {
  //   this.showCommentForm = !this.showCommentForm;
  //   this.showCommentButtonLabel = this.showCommentForm ? 'Ẩn bình luận' : 'Xem bình luận';
  // }

 
  

//   constructor(
//     private route: ActivatedRoute,
//     private productService: ProductService
//   ) {}
// id:any;
// itemPro:any;
//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       this.getProductById(params['id']);
//     })
   
    
    
//   }


  
//   getProductById(id:any){
//     this.productService.getProductById(id).subscribe((res)=>{
//       this.itemPro = res;
//       console.log(this.itemPro);
      
//     })
//   }
id: any;
itemPro: any;

constructor(
  private route: ActivatedRoute,
  private ProductService: ProductService
) {}

ngOnInit(): void {
  // const id = + this.route.snapshot.paramMap.get('id');
  // this.productService.getProductById(id).subscribe(product => this.itemPro = product);
}

getProductById(id: any) {
  this.ProductService.getProductById(id).subscribe(res => {
    this.itemPro = res;
    console.log(this.itemPro);
  });
}
  
}



// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ProductService } from './ProductService';


// @Component({
//   selector: 'app-item-detail',
//   templateUrl: './deital-product.component.html',
//   styleUrls: ['./deital-product.component.scss']
// })
// export class ItemDetailComponent implements OnInit {
//   item: any;
//   id:number;
//   constructor(
//     private route: ActivatedRoute,
//     private ProductService : ProductService
//   ) { }

//   ngOnInit():void {
//      this.id = +this.route.snapshot.paramMap.get('id');
//     if (id !== null && id !== undefined) {
//       this.ProductService.getItem(id).subscribe(item => this.item = item);
//     }
//   }
// }

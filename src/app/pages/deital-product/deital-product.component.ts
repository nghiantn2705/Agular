import { Component } from '@angular/core';
import products from 'src/app/datas/products';
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
  products = products
  selected = 'option1';
  selected2 = 'option1';
  mainImage: string;
  thumbnails: string[] = [
    'https://admin.thegioigiay.com/upload/product/2023/05/giay-the-thao-nam-nike-air-jordan-1-retro-low-og-doernbecher-fd9665-351-phoi-mau-38-5-645eee8896f4d-13052023085728.jpg',
    'https://admin.thegioigiay.com/upload/product/2023/05/giay-the-thao-nam-nike-air-jordan-1-retro-low-og-doernbecher-fd9665-351-phoi-mau-38-5-645eee88a396f-13052023085728.jpg',
    'https://admin.thegioigiay.com/upload/product/2023/05/giay-the-thao-nam-nike-air-jordan-1-retro-low-og-doernbecher-fd9665-351-phoi-mau-38-5-645eee88ab5d1-13052023085728.jpg',
    'https://admin.thegioigiay.com/upload/product/2023/05/giay-the-thao-nam-nike-air-jordan-1-retro-low-og-doernbecher-fd9665-351-phoi-mau-38-5-645eee88b696e-13052023085728.jpg'
  ];

  constructor() {
    this.mainImage = this.thumbnails[0]; // Hiển thị ảnh đầu tiên khi trang được tải
  }

  changeImage(imagePath: string) {
    this.mainImage = imagePath; // Thay đổi ảnh chính khi click vào thumbnail
  }
  currentIndex = 0;
  nextImage() {
    this.currentIndex++;
    if (this.currentIndex >= this.thumbnails.length) {
      this.currentIndex = 0;
    }
    this.mainImage = this.thumbnails[this.currentIndex];
  }
  previousImage() {
    this.currentIndex = (this.currentIndex - 1 + this.thumbnails.length) % this.thumbnails.length;
    this.mainImage = this.thumbnails[this.currentIndex]; // Chuyển đổi sang ảnh trước đó
  }

  comments: Comment[] = [
    { author: 'Người dùng 1', text: 'Nội dung bình luận 1...', timestamp: '3 giờ trước' },
    { author: 'Người dùng 2', text: 'Nội dung bình luận 2...', timestamp: '2 giờ trước' }
  ];

  showCommentForm: boolean = false;
  showCommentButtonLabel: string = 'Xem bình luận';
  newComment: string = '';

  // toggleComments() {
  //   this.showCommentForm = !this.showCommentForm;
  //   this.showCommentButtonLabel = this.showCommentForm ? 'Ẩn bình luận' : 'Xem bình luận';
  // }

  addComment() {
    if (this.newComment.trim() !== '') {
      const newComment: Comment = {
        author: 'Người dùng mới',
        text: this.newComment,
        timestamp: 'Vừa xong'
      };
      this.comments.push(newComment);
      this.newComment = '';
    }
  }
  showComments = false;
  toggleComments() {
    this.showComments = !this.showComments;
  }
}


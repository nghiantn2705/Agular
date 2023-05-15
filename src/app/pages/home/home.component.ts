import { Component } from '@angular/core';
import { Products } from '../../common/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  toggleDescription(product: any) {
    product.isDescriptionVisible = !product.isDescriptionVisible;
  }
  products: Products[] = [
    {
      id: 1,
      name: 'Ao khoac',
      price: 200,
      description: 'Mo ta cho san pham 1' ,
      imgUrl:
        'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/e/c/ecom.21.10_232__1.jpg',
        isDescriptionVisible: false,
    },
    
    {
      id: 2,
      name: 'Quan',
      price: 300,
      description: 'Mo ta cho san pham 2',
      imgUrl:
        'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/e/c/ecom.21.10_232__1.jpg',
        isDescriptionVisible: false,
    },
    {
      id: 3,
      name: 'Vest',
      price: 400,
      description: 'Mo ta cho san pham 3',
      imgUrl:
        'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/e/c/ecom.21.10_232__1.jpg',
        isDescriptionVisible: false,
    },
    
  ];
  
}
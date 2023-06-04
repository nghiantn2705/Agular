import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Products } from 'src/app/common/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  getProducts() {
    return this._http.get('http://localhost:3000/productList');
  }

  getProductById(id: any) {
    return this._http.get(`http://localhost:3000/productList/${id}`);
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {

//   constructor(private http: HttpClient) { }

//   getData() {
//     return this.http.get(' http://localhost:3000/productList');
//   }

//   getItem(id: number) {
//     return this.http.get(` http://localhost:3000/productList/${id}`);
//   }
// }

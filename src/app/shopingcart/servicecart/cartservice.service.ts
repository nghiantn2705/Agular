import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  private apiUrl = 'http://localhost:3000/products';
  cart: any[] = [];

  constructor(private http: HttpClient) { }

  getProductsCart(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  // addToCart( data :any){
  //   return this.http.post<any>("http://localhost:3000/cart/",data);
  // }
  getCartItems(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:3000/cart/");
  }
  addToCart(pro: any): Observable<any> {
    console.log(pro);
    console.log(this.cart);
    
    const existingProduct = this.cart.find(p => p.id === pro.id);
    console.log(existingProduct);
    
    if (existingProduct) {
      existingProduct.quantity += 1;
      return this.http.post<any>("http://localhost:3000/cart/",existingProduct)
    } else {
      pro.quantity = 1;
      return this.http.post<any>("http://localhost:3000/cart/",pro);
    }
  }
}

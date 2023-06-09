import { Injectable } from '@angular/core';
import { Cart } from '../common/Cart';
import { CartItem } from '../common/CartItem';
import { BehaviorSubject, Observable } from 'rxjs';
import { Products } from '../common/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() {}
  // addToCart(pro: Products): void {
  //   let cartItem = this.cart.items.find((item) => item.product._id === pro._id);
  //   if (cartItem){
  //     return;
  //   };

  //   this.cart.items.push(new CartItem(pro));
  //   this.setCartToLocalStorage();
  // }
  addToCart(pro: Products): void {
    let cartItem = this.cart.items.find((item) => item.product._id === pro._id);
    if (cartItem) {
      // Tăng số lượng của sản phẩm
      cartItem.quantity++;
      cartItem.price = cartItem.quantity * cartItem.product.price;
    } else {
      // Sản phẩm chưa có trong giỏ hàng, tạo mới một CartItem
      cartItem = new CartItem(pro);
      this.cart.items.push(cartItem);
    }
  
    this.setCartToLocalStorage();
  }
  

  removeFromCart(proId: object): void {
    this.cart.items = this.cart.items.filter(
      (item) => item.product._id != proId
    );
    this.setCartToLocalStorage();
  }

  changeQuantity(proId: object, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.product._id === proId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.product.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  getCart(): Cart {
    return this.cartSubject.value;
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.price,
      0
    );
    this.cart.totalCount = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.quantity,
      0
    );

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}

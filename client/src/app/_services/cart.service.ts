import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartCount: number = 0;
  private cartItems: string[] = [];
  cartCountUpdated: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    const storedItems = sessionStorage.getItem('cartItems');
    if(storedItems) {
      this.cartItems = JSON.parse(storedItems);
    }
   }

  addToCart(item: any) {
    this.cartItems.push(item);
    this.saveCartToStorage();
    this.cartCountUpdated.emit(this.cartItems.length);
  }

  getCartItems() {
    return this.cartItems;
  }


  private saveCartToStorage() {
    sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}

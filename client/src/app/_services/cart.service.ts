import { EventEmitter, Injectable } from '@angular/core';
import { cartItem } from '../cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cartCount: number = 0;
  private cartItems: cartItem[] = [];
  cartCountUpdated: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    const storedItems = sessionStorage.getItem('cartItems');
    if(storedItems) {
      this.cartItems = JSON.parse(storedItems);
    }
   }

  addToCart(item: any) {
    const existingItem = this.cartItems.find((cartItem) => cartItem._id === item._id);

    if (existingItem) {
      // Item already exists, update quantity and price
      existingItem.qty += item.qty;
      // Update the price calculation logic based on your requirements
      existingItem.prize = item.prize * existingItem.qty;
    } else {
      // Item does not exist, add it to the cart
      let itemToAdd: cartItem = {
        _id: item._id,
        name: item.name,
        image: item.image,
        size: item.size,
        prize: item.prize,
        qty: item.qty
      }
      this.cartItems.push(itemToAdd);
    }
    // this.cartItems.push(item);
    this.saveCartToStorage();
    this.cartCountUpdated.emit(this.cartItems.length);
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    sessionStorage.removeItem('cartItems');
  }


  private saveCartToStorage() {
    sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}

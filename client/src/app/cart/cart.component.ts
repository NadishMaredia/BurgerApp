import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any;
  totalAmount: number = 0;
  taxAmount: number = 0;
  finalAmount: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartItems();
    this.calculateTotalAmount();
  }

  getCartItems() {
    this.cartItems = this.cartService.getCartItems();
  }

  calculateTotalAmount() {
    for(let i = 0;i<this.cartItems.length;i++) {
      this.totalAmount += parseFloat(Number(this.cartItems[i].prize).toFixed(1));
      this.taxAmount = parseFloat(Number(this.totalAmount / 13).toFixed(2));
    }
    this.finalAmount = this.totalAmount + this.taxAmount;
  }

  clearCart() {
    this.cartService.clearCart();
  }

}

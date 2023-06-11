import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { cartItem } from '../cartItem';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menu: any;

  constructor(private cartService: CartService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addToCart(pizza: cartItem) {
    console.log("Menu");
    pizza.qty = 1;
    console.log(pizza);
    this.cartService.addToCart(pizza);
    this.toastr.success('Added to the cart!')
  }
}

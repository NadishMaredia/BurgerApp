import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menu: any;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(pizza: any) {
    this.cartService.addToCart(pizza);
  }
}

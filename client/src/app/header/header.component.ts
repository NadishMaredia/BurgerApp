import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  cartCount: number = 0;
  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartCountUpdated.subscribe(count => {
      this.cartService.cartCount = count;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { HomeService } from '../_services/home.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: any;

  constructor(private homeService: HomeService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getMenus();

    this.cartService.cartCountUpdated.subscribe(count => {
      this.cartService.cartCount = count;
    });
  }

  getMenus() {
    this.homeService.getMenus()
      .subscribe(res => {
        this.menu = res;
      })
  }

}

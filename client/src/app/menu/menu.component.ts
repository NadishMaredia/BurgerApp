import { Component, OnInit } from '@angular/core';
import { HomeService } from '../_services/home.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: any;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus() {
    this.homeService.getMenus()
      .subscribe(res => {
        this.menu = res;
      })
  }

}

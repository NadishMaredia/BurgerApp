import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = 'http://localhost:3000/api/home';

  constructor(private http: HttpClient) { }

  getMenus() {
    return this.http.get(this.url);
  }
}

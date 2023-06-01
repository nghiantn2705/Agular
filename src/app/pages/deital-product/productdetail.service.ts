import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductdetailService {
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://localhost:3000/productList/');
  }

  getItem(id: number) {
    return this.http.get(`http://localhost:3000/productList/${id}`);
  }
}

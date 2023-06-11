import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicepageService {
  private apiURL = 'http://localhost:8088/api';
  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<any>("http://localhost:8088/api/products/");
  }
  getUsers() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiURL}/users`, { headers });
  }
}

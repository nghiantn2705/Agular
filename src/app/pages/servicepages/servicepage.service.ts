import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicepageService {

  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<any>("http://localhost:8088/api/products/");
  }
}

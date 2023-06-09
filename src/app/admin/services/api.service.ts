import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postProduct( data :any){
    return this.http.post<any>("http://localhost:8088/api/products/",data);
  }
  getProduct(){
    return this.http.get<any>("http://localhost:8088/api/products/");
  }
  putProduct(data:any,id:number){
    return this.http.put<any>("http://localhost:8088/api/products/"+id,data)
  }
  deleteProduct(id:number){
    return this.http.delete<any>("http://localhost:8088/api/products/"+id)
  }
  postCate( data :any){
    return this.http.post<any>("http://localhost:8088/api/category/",data);
  }
  getCate(){
    return this.http.get<any>("http://localhost:8088/api/category/");
  }
  putCate(data:any,id:number){
    return this.http.put<any>("http://localhost:8088/api/category/"+id,data)
  }
  deleteCate(id:number){
    return this.http.delete<any>("http://localhost:8088/api/category/"+id)
  }
}

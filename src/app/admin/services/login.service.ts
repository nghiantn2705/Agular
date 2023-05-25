import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  registerUser( data :any){
    return this.http.post<any>("http://localhost:3000/users/",data);
  }
  loginUser(username: string, password: string) {
    return this.http.get('http://localhost:3000/users?username=' + username + '&password=' + password);
  }
}

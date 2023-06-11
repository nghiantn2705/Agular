import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = 'http://localhost:8088/api';
 isLoggedIn = localStorage.getItem('token') !== null;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    const url = `${this.apiURL}/signin`;
    return this.http.post(url, { email, password }).pipe(
      tap((res:any) => {
        localStorage.setItem('token', res.accessToken);
        this.isLoggedIn = true;
        if(res.user.role == "member"){
          this.router.navigateByUrl('/home');
        }
        if(res.user.role == "admin"){
          this.router.navigateByUrl('/admin');
        }
      })
    );
  }

  register(email: string, password: string,confirmPassword:string): Observable<any> {
    const url = `${this.apiURL}/signup`;
    return this.http.post(url, { email, password,confirmPassword }).pipe(
      tap(() =>  this.router.navigateByUrl('/login'))
    );
  }
  logout() {
   
    localStorage.removeItem('token');
  
   
    this.isLoggedIn = false;
  
  
    this.router.navigate(['/login']);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Header: { headers: HttpHeaders; };

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.Header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        covenworks: 'Bearer auth'
      })
    };
   }


  postMethod(data) {
    const url = 'http://fakebackend.test';
    return this.http.post(`${url}`, data, this.Header).pipe(share());
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}

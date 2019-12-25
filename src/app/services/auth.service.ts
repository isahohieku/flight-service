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
        TUROGAuth: 'Bearer aafe66ae-15fb-3e11-9afe-eae6a5d881a1'
      })
    };
   }


  postMethod(data, url) {
    return this.http.post(`${url}`, data, this.Header).pipe(share());
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}

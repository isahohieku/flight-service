import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { share } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Header: { headers: HttpHeaders; };
  private login: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private router: Router,
    private util: UtilService
  ) {
    this.Header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        covenworks: 'Bearer auth'
      })
    };

    if (!this.util.getUserObject()) {
      this.setLoginStatus(true);
    }
   }


  postMethod(data) {
    const url = 'http://fakebackend.test';
    return this.http.post(`${url}`, data, this.Header).pipe(share());
  }

  setLoginStatus(value) {
    this.login.next(value);
  }

  listenToLoginStatus(): Observable<boolean> {
    return this.login.asObservable();
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}

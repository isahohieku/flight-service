import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  baseUrl = 'https://api.turog.com.ng/cribchow-mp/';
  private location: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private token: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  headerFooter: Subject<boolean> = new Subject<boolean>();
  allLocations: Subject<any> = new Subject<any>();
  userData: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private router: Router) {
    this.headerFooter.next(false);
  }

  setUserObject(data) {
    localStorage.setItem('userObj', JSON.stringify(data));
  }

  getUserObject() {
    if (localStorage.getItem('userObj') !== undefined && localStorage.getItem('userObj') !== null) {
      return JSON.parse(localStorage.getItem('userObj'));
    }
    return null;
  }

  setToken(data) {
    localStorage.setItem('token', JSON.stringify(data));
    this.token.next(data);
  }

  getToken() {
    let token;
    token = this.token.value;
    if ((localStorage.getItem('token') !== undefined) && (localStorage.getItem('token') !== null)) {
      token = localStorage.getItem('token').split('"')[1];
    }
    return token;
  }

  setLocation(data) {
    this.location.next(data);
  }

  getLocation(): Observable<any> {
    return this.location as Observable<any>;
  }

  setHeaderFooterStatus(value) {
    this.headerFooter.next(value);
  }

  set setAllLocations(data) {
    this.allLocations.next(data);
  }

  set setUserdata(data) {
    this.userData.next(data);
  }

  getUserData(): Observable<any> {
    return this.userData as Observable<any>;
  }

  gettAllLocations(): Observable<any> {
    return this.allLocations as Observable<any>;
  }

  ListenToHeaderFooter(): Observable<boolean> {
    return this.headerFooter as Observable<boolean>;
  }
}

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UtilService } from './util.service';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private baseUrl = this.util.baseUrl;
  private header: { headers: HttpHeaders; };

  constructor(
    private http: HttpClient,
    private util: UtilService,
  ) {
    this.header = {
      headers: new HttpHeaders()
    };
  }

  getResource(url) {
    return this.http.get(`${url}`, this.header).toPromise();
  }

  getAllMethod(url) {
    return this.http.get(`${url}`, this.header).toPromise();
  }

  getAllMethodWithObservables(url): Observable<any> {
    return this.http.get(`${url}`, this.header).pipe(share());
  }

  postAllMethod(url, data) {
    return this.http.post(`${this.baseUrl}${url}`, data, this.header).toPromise();
  }

  postAllWithoutData(url) {
    return this.http.post(`${this.baseUrl}${url}`, this.header).toPromise();
  }

  updateMethod(url, data) {
    return this.http.put(`${this.baseUrl}${url}`, data, this.header).toPromise();
  }
}

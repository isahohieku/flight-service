import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UtilService } from './util.service';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

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
}

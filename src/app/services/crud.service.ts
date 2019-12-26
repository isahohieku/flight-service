import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UtilService } from './util.service';

import { share } from 'rxjs/operators';
import { Observable } from 'rxjs';

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

  getResource(url): Observable<any> {
    return this.http.get(`${url}`, this.header).pipe(share());
  }
}

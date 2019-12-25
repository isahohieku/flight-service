import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UtilService } from '../../services/util.service';
import { CrudService } from 'src/app/services/crud.service';
import { catchError, filter, take, switchMap } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token: any;
  private Authorization = 'Authorization';
  constructor(private util: UtilService, private crud: CrudService) { this.token = this.util.getToken(); }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = this.addTokenToheader(request);

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        if (error && error.status === 401) {
          return this.getTokenFromBackend().pipe(
            filter(result => result !== null),
            take(1),
            switchMap((res) => {
              this.token = res.token;
              this.util.setToken(this.token);
              this.util.setLocation(res.location);
              return next.handle(this.addTokenToheader(request));
            })
          );
        }

        return throwError(error);

      })
    );
  }

  addTokenToheader(request: HttpRequest<any>) {

    if (!this.token) {
      return request;
    }

    return request.clone({
      headers: request.headers.set(this.Authorization, `Bearer ${this.token}`)
    });

  }

  getTokenFromBackend() {
    return this.crud.getAllMethodWithObservables('https://api.turog.com.ng/cribchow/user/resources');
  }
}

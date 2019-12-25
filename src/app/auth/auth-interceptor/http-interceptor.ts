import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { UtilService } from '../../services/util.service';
import { CrudService } from 'src/app/services/crud.service';
import { catchError, filter, take, switchMap } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private token: any;
  private fakeUrl = 'http://fakebackend.test';
  private correctCredentials = {
    username: 'demo',
    password: 'demo'
  };

  constructor(private util: UtilService) { this.token = this.util.getToken(); }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.fakeUrl === request.url) {
      return this.fakeBackend(request);
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        // if (error && error.status === 401) {
        //   return this.getTokenFromBackend().pipe(
        //     filter(result => result !== null),
        //     take(1),
        //     switchMap((res) => {
        //       this.token = res.token;
        //       this.util.setToken(this.token);;
        //       return next.handle(this.fakeBackend(request));
        //     })
        //   );
        // }

        return throwError(error);

      })
    );
  }

  fakeBackend(request: HttpRequest<any>) {

    const { username, password } = request.body;

    if (username === this.correctCredentials.username && password === this.correctCredentials.password) {

      const body = {
        message: 'successfully login',
        token: 'abcdefghijklmnopqrstuvwxyz'
      };

      return of(new HttpResponse(
        { status: 200, body }
      ));
    }

    const error = new Error('Wrong username or password');

    return throwError(error);
  }

}

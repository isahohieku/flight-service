import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UtilService } from '../../../services/util.service';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnDestroy {
  subscription: Subscription;
  loginStatus: boolean;

  constructor(
    private util: UtilService,
    private auth: AuthService,
    private router: Router) {
    this.listenToUserObjChange();
  }

  listenToUserObjChange() {
    this.auth.listenToLoginStatus().subscribe(res => this.loginStatus = res);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.loginStatus) {
      localStorage.clear();
      return this.router.navigateByUrl('/admin');
    }

    return true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

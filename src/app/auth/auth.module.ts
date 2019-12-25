import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [SigninComponent, AuthComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthModule { }

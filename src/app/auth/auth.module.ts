import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthModule { }

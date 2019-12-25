import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardModule { }

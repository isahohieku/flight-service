import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { MainAppComponent } from './main-app/main-app.component';
import { GridModalComponent } from '../components/grid-modal/grid-modal.component';

@NgModule({
  declarations: [MainAppComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],

})
export class DashboardModule { }

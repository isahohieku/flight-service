import { NgModule } from '@angular/core';
import { routes } from './routes';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class MainModule { }

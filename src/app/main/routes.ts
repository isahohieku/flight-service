import { Routes } from '@angular/router';
// import { LayoutComponent } from '../layout/layout.component';
import { AuthComponent } from '../auth/auth.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: AuthComponent, loadChildren: '../auth/auth.module#AuthModule' },
    { path: 'app', component: DashboardComponent, loadChildren: '../dashboard/dashboard.module#DashboardModule' }
];

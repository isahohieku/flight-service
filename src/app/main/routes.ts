import { Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { LayoutComponent } from '../layout/layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../auth/guards/auth.guard';

export const routes: Routes = [
    { path: '', component: AuthComponent, loadChildren: '../auth/auth.module#AuthModule' },
    // { path: 'app', component: DashboardComponent, loadChildren: '../dashboard/dashboard.module#DashboardModule' }
    {
        path: 'app', component: LayoutComponent,
        children: [{ path: '', component: DashboardComponent, loadChildren: '../dashboard/dashboard.module#DashboardModule' }],
        canActivate: [AuthGuard]
    }
];

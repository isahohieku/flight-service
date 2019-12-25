import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AuthComponent } from '../auth/auth.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: AuthComponent, loadChildren: '../core/core.module#CoreModule' },
        ]
    }
];

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { materials } from './materials';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth/auth-interceptor/http-interceptor';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SigninFormComponent } from '../components/signin-form/signin-form.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { AirportCardComponent } from '../components/airport-card/airport-card.component';
import { GridModalComponent } from '../components/grid-modal/grid-modal.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    SigninFormComponent,
    LoaderComponent,
    AirportCardComponent,
    GridModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ...materials,
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  exports: [
    // Modules
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ...materials,
    // components
    SigninFormComponent,
    LoaderComponent,
    AirportCardComponent,
  ],
  entryComponents: [
    GridModalComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}

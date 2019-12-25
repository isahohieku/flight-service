import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, MainComponent, SidenavComponent],
  imports: [
    SharedModule
  ],
  exports: [
    LayoutComponent, HeaderComponent, FooterComponent
  ]
})
export class LayoutModule { }

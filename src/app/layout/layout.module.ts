import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, SidenavComponent],
  imports: [
    SharedModule
  ],
  exports: [
    LayoutComponent, HeaderComponent, FooterComponent
  ]
})
export class LayoutModule { }

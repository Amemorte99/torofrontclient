import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './menu-list/navbar.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { FooterAdminComponent } from './footer-admin/footer-admin.component';
import { WebsiteRoutingModule } from '../modules/website/website-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HeaderAdminComponent,
    NavbarAdminComponent,
    FooterAdminComponent,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HeaderAdminComponent,
    NavbarAdminComponent,
    FooterAdminComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule

  ]
})
export class LayoutsModule { }

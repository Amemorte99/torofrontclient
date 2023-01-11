import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './menu-list/navbar.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { FooterAdminComponent } from './footer-admin/footer-admin.component';
import { WebsiteRoutingModule } from '../modules/website/website-routing.module';
import { UserUEAComponent } from './user-uea/user-uea.component';
import { MenuListUEAComponent } from './menu-list-uea/menu-list-uea.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HeaderAdminComponent,
    NavbarAdminComponent,
    FooterAdminComponent,
    UserUEAComponent,
    MenuListUEAComponent,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HeaderAdminComponent,
    NavbarAdminComponent,
    FooterAdminComponent,
    UserUEAComponent,
    MenuListUEAComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule

  ]
})
export class LayoutsModule { }

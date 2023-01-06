import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtdRoutingModule } from './utd-routing.module';
import { HomeUtdComponent } from './components/home-utd/home-utd.component';
import { CreateComponent } from './components/create/create.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UtdComponent } from './utd.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { FormsComponent } from './components/forms/forms.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalsComponent } from './components/modals/modals.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { TablesComponent } from './components/tables/tables.component';


@NgModule({
  declarations: [
    UtdComponent,
    HomeUtdComponent,
    CreateComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SettingsComponent,
    TablesComponent,
    SigninComponent,
    SignupComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    ButtonsComponent,
    FormsComponent,
    ModalsComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    UtdRoutingModule,
    LayoutsModule,
    SharedModule,
    ReactiveFormsModule,

  ]
})
export class UtdModule { }

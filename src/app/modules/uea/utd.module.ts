import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtdRoutingModule } from './utd-routing.module';
import { CreateComponent } from './components/create/create.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtdComponent } from './utd.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { FormsComponent } from './components/forms/forms.component';
import { ModalsComponent } from './components/modals/modals.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { TablesComponent } from './components/tables/tables.component';
import { HomeComponent } from './components/home/home.component';
import { ProfilComponent } from './components/profil/profil.component';
import { UeaComponent } from './components/uea/uea.component';
import { FormationComponent } from './components/formation/formation.component';
import { StageComponent } from './components/stage/stage.component';
import { RecruteurComponent } from './components/recruteur/recruteur.component';
import { DemandeurComponent } from './components/demandeur/demandeur.component';
import { OffreComponent } from './components/offre/offre.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [
    UtdComponent,
    CreateComponent,
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
    NotificationsComponent,
    HomeComponent,
    ProfilComponent,
    UeaComponent,
    FormationComponent,
    StageComponent,
    RecruteurComponent,
    DemandeurComponent,
    OffreComponent
  ],
  imports: [
    CommonModule,
    UtdRoutingModule,
    LayoutsModule,
    SharedModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    SwiperModule

  ],

})
export class UtdModule { }

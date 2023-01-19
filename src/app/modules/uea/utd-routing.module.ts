import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { FormsComponent } from './components/forms/forms.component';
import { ModalsComponent } from './components/modals/modals.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { UtdComponent } from './utd.component';
import { ProfilComponent } from './components/profil/profil.component';
import { UeaComponent } from './components/uea/uea.component';
import { FormationComponent } from './components/formation/formation.component';
import { StageComponent } from './components/stage/stage.component';
import { RecruteurComponent } from './components/recruteur/recruteur.component';

const routes: Routes = [
  {

    path:"",
    component : UtdComponent,
    children:[
      {
        path: "",
        component: HomeComponent,
      },
      {
        path: "si",
        component: SigninComponent,
      },
      {
        path: "settings",
        component: SettingsComponent,
      },
      {
        path: "profil",
        component: ProfilComponent,
      },
      {
        path: "uea",
        component: UeaComponent,
      },
      {
        path: "formation",
        component: FormationComponent,
      },
      {
        path: "stage",
        component: StageComponent,
      },
      {
        path: "recruteur",
        component: RecruteurComponent,
      },
    ]
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtdRoutingModule { }

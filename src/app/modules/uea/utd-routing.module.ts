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
import { SignupComponent } from './components/signup/signup.component';
import { TablesComponent } from './components/tables/tables.component';
import { HomeComponent } from './components/home/home.component';
import { UtdComponent } from './utd.component';

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
    ]
  },

  { path: '', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'sign-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'modals', component: ModalsComponent },
  { path: 'forms', component: FormsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtdRoutingModule { }

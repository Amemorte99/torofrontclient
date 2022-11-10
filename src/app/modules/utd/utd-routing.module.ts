import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { HomeUtdComponent } from './components/home-utd/home-utd.component';
import { UtdComponent } from './utd.component';

const routes: Routes = [
  {

    path:"",
    component : UtdComponent,
    children:[
      {
        path: "",
        component: HomeUtdComponent,
      },
      {
        path: "create",
        component: CreateComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtdRoutingModule { }

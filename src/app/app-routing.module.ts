import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtdComponent } from './modules/utd/utd.component';

const routes: Routes = [
  // website routing module declared here
  {
  path: '',
  loadChildren: () => import('./modules/website/website.module').then((m) => m.WebsiteModule)
  },
    // utd routing module declared here
  {
    path: 'utd/achat',
    loadChildren: () => import('./modules/utd/utd.module').then((m) => m.UtdModule)
  },
  {
    path: 'utd',
    loadChildren: () => import('./modules/utd/utd.module').then((m) => m.UtdModule)
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

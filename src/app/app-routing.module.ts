import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/website/components/auth/services/auth.guard';

const routes: Routes = [
  // website routing module declared here
  {
  path: '',
  loadChildren: () => import('./modules/website/website.module').then((m) => m.WebsiteModule)
  },
    // utd routing module declared here
    {
      path: 'utd/dashboard',
      canActivate: [AuthGuard],
      loadChildren: () => import('./modules/uea/utd.module').then((m) => m.UtdModule)
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

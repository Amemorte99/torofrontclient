import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtdRoutingModule } from './utd-routing.module';
import { HomeUtdComponent } from './components/home-utd/home-utd.component';
import { CreateComponent } from './components/create/create.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UtdComponent } from './utd.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UtdComponent,
    HomeUtdComponent,
    CreateComponent
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

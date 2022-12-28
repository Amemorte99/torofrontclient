import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrototypeComponent } from './components/prototype/prototype.component';
import { IndividuComponent } from './components/utd/individu/individu.component';
import { MoralComponent } from './components/utd/moral/moral.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { CurriculumoneComponent } from './components/prototype/cvs/curriculumone/curriculumone.component';
import { CurriculumtwoComponent } from './components/prototype/cvs/curriculumtwo/curriculumtwo.component';



@NgModule({
  declarations: [
    PrototypeComponent,
    IndividuComponent,
    MoralComponent, PaiementComponent, CurriculumoneComponent, CurriculumtwoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ]
})
export class SharedModule { }

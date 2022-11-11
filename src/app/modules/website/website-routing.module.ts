import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CvcontainerComponent } from './components/cvcontainer/cvcontainer.component';
import { CvType1Component } from './components/cvcontainer/cvprototype/components/cv-type1/cv-type1.component';
import { FormationComponent } from './components/formation/formation.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { HomeComponent } from './components/home/home.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { NosmeilleurscvComponent } from './components/nosmeilleurscv/nosmeilleurscv.component';
import { PartenaireComponent } from './components/partenaire/partenaire.component';
import { RedactionComponent } from './components/redaction/redaction.component';
import { TemoignageComponent } from './components/temoignage/temoignage.component';
import { VisitetentrepriseComponent } from './components/visitetentreprise/visitetentreprise.component';

const routes: Routes = [
  {path:'',component: HomeComponent },
  {path:'lesmeilleurscv',component: NosmeilleurscvComponent },
  {path:'formation',component: FormationComponent },
  {path:'visite',component: VisitetentrepriseComponent },
  {path:'newsletter',component: NewsletterComponent },
  {path:'temoignage',component: TemoignageComponent },
  {path:'partenaire',component:PartenaireComponent},
  {path:'apropos',component:AboutComponent},
  {path:'redaction',component:RedactionComponent},
  {path:'contact',component:ContactComponent},
  {path:'inscription',component:FormulaireComponent},
  {path:'fairecv',component:CvcontainerComponent},
  {path:'cv1',component:CvType1Component},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }

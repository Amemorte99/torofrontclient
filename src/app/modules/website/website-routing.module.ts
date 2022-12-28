import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CvcontainerComponent } from './components/cvcontainer/cvcontainer.component';
import { CvType1Component } from './components/cvcontainer/cvprototype/components/cv-type1/cv-type1.component';
import { CvType5Component } from './components/cvcontainer/cvprototype/components/cv-type5/cv-type5.component';
import { DetEmploiComponent } from './components/det-emploi/det-emploi.component';
import { DetRecruteurComponent } from './components/det-recruteur/det-recruteur.component';
import { DetStagiaireComponent } from './components/det-stagiaire/det-stagiaire.component';
import { FormationComponent } from './components/formation/formation.component';
import { AchatCompteComponent } from './components/formulaire/achat-compte/achat-compte.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { HomeComponent } from './components/home/home.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { NosmeilleurscvComponent } from './components/nosmeilleurscv/nosmeilleurscv.component';
import { PartenaireComponent } from './components/partenaire/partenaire.component';
import { RedactionComponent } from './components/redaction/redaction.component';
import { TemoignageComponent } from './components/temoignage/temoignage.component';
import { VisitetentrepriseComponent } from './components/visitetentreprise/visitetentreprise.component';
import { FormuComponent } from './components/formu/formu.component';

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
  {path:'cv5',component:CvType5Component},
  {path:'detailStagiaire',component:DetStagiaireComponent},
  {path:'detailRecruteur',component:DetRecruteurComponent},
  {path:'detailEmploi',component:DetEmploiComponent},
  {path:'paye',component:AchatCompteComponent},
  {path:'formu',component:FormuComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }

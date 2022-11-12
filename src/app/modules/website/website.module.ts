import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { NosmeilleurscvComponent } from './components/nosmeilleurscv/nosmeilleurscv.component';
import { FormationComponent } from './components/formation/formation.component';
import { VisitetentrepriseComponent } from './components/visitetentreprise/visitetentreprise.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { TemoignageComponent } from './components/temoignage/temoignage.component';
import { HomeComponent } from './components/home/home.component';
import { PartenaireComponent } from './components/partenaire/partenaire.component';
import { AboutComponent } from './components/about/about.component';
import { RedactionComponent } from './components/redaction/redaction.component';
import { ContactComponent } from './components/contact/contact.component';
import { ListcvComponent } from './components/gestionCv/listcv/listcv.component';
import { DetailcvComponent } from './components/gestionCv/detailcv/detailcv.component';
import { FormsModule } from '@angular/forms';
import { NgpImagePickerModule } from 'ngp-image-picker';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { SwiperModule } from 'swiper/angular';
import { CollapseModule } from 'ngx-bootstrap/collapse';


import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

//material import
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core'
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkTableModule } from '@angular/cdk/table'

import {  ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { CvcontainerComponent } from './components/cvcontainer/cvcontainer.component';
import { FormContainerComponent } from './components/cvcontainer/form-container/form-container.component';
import { CvprototypeComponent } from './components/cvcontainer/cvprototype/cvprototype.component';
import { InformationFormComponent } from './components/cvcontainer/form-container/components/information-form/information-form.component';
import { ProfilFromComponent } from './components/cvcontainer/form-container/components/profil-from/profil-from.component';
import { FormationFromComponent } from './components/cvcontainer/form-container/components/formation-from/formation-from.component';
import { ExperienceFromComponent } from './components/cvcontainer/form-container/components/experience-from/experience-from.component';
import { NgxSummernoteModule } from 'ngx-summernote';
import { CompetenceComponent } from './components/cvcontainer/form-container/components/competence/competence.component';
import { LangueFormComponent } from './components/cvcontainer/form-container/components/langue-form/langue-form.component';
import { CentreFromComponent } from './components/cvcontainer/form-container/components/centre-from/centre-from.component';
import { CoursFormComponent } from './components/cvcontainer/form-container/components/cours-form/cours-form.component';
import { StageFormComponent } from './components/cvcontainer/form-container/components/stage-form/stage-form.component';
import { ActiviteFormComponent } from './components/cvcontainer/form-container/components/activite-form/activite-form.component';
import { ReferneceFormComponent } from './components/cvcontainer/form-container/components/refernece-form/refernece-form.component';
import { QualiteFormComponent } from './components/cvcontainer/form-container/components/qualite-form/qualite-form.component';
import { RealisationFormComponent } from './components/cvcontainer/form-container/components/realisation-form/realisation-form.component';
import { BasPageFormComponent } from './components/cvcontainer/form-container/components/bas-page-form/bas-page-form.component';
import { BtnPiedModelComponent } from './components/cvcontainer/btn-pied-model/btn-pied-model.component';
import { CvType1Component } from './components/cvcontainer/cvprototype/components/cv-type1/cv-type1.component';
import { CvType2Component } from './components/cvcontainer/cvprototype/components/cv-type2/cv-type2.component';
import { CvType3Component } from './components/cvcontainer/cvprototype/components/cv-type3/cv-type3.component';




@NgModule({
  declarations: [
    NosmeilleurscvComponent,
    FormationComponent,
    VisitetentrepriseComponent,
    NewsletterComponent,
    TemoignageComponent,
    HomeComponent,
    FormulaireComponent,
    PartenaireComponent,
    AboutComponent,
    RedactionComponent,
    ContactComponent,
    ListcvComponent,
    DetailcvComponent,
    CvcontainerComponent,
    FormContainerComponent,
    CvprototypeComponent,
    InformationFormComponent,
    ProfilFromComponent,
    FormationFromComponent,
    ExperienceFromComponent,
    CompetenceComponent,
    LangueFormComponent,
    CentreFromComponent,
    CoursFormComponent,
    StageFormComponent,
    ActiviteFormComponent,
    ReferneceFormComponent,
    QualiteFormComponent,
    RealisationFormComponent,
    BasPageFormComponent,
    BtnPiedModelComponent,
    CvType1Component,
    CvType2Component,
    CvType3Component,

  ],
  imports: [
    CommonModule,
    SharedModule,

    LayoutsModule,
    NgpImagePickerModule,
    FormsModule,
    WebsiteRoutingModule, SwiperModule, CollapseModule.forRoot(), BsDatepickerModule.forRoot(),MatSliderModule,MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    CdkTableModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    TextFieldModule,
    MatIconModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTableModule,
    FileUploadModule,
    NgxSummernoteModule



  ]
})
export class WebsiteModule { }

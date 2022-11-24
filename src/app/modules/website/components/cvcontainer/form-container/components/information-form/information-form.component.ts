import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';
import { InformationsPersonnelleModel } from 'src/app/models/informations-personnelle.models';
import { AccountService } from '../../../account/account.service';

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrls: ['./information-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationFormComponent implements OnInit  {
  

  cvInformationPersnnelleData: InformationsPersonnelleModel = {
    photoUrl: '',
    photoUrl2: './assets/images/cvimg/cv.jpg',
    prenom: '',
    nomfamille: '',
    mail: '',
    titreprofil: '',
    tel: '',
    adresse: '',
    codepostal: '',
    ville: '',

    dateNaissance: '',
    lieuNaissance: '',
    etatCivil: '',
    permisConduire: '',
  };

  imagePickerConf: ImagePickerConf = {
    borderRadius: '4px',
    language: 'en',
    width: '400px',
    height: '140px',
  };
  constructor(public accountService: AccountService) {}

  ngOnInit(): void {}

  launchValueOne(e: any, type: string) {
    // this.cvInformationPersnnelleData.prenom = e.target.value
    let cv = this.accountService.cvInfo;

    //   this.sendDataCv.emit(this.cvInformationPersnnelleData)
    console.log(cv);
    console.log(e.target.value);
    if (type == 'prenom') {
      cv.prenom = e.target.value;
    }  else if (type == 'nom') {
      cv.nomfamille = e.target.value;
    }
     else if (type == 'mail') {
      cv.mail = e.target.value;
    }else if (type == 'titre') {
      cv.titreprofil = e.target.value;
    }else if (type == 'tel') {
      cv.tel = e.target.value;
    }
    else if (type == 'adresse') {
      cv.adresse = e.target.value;
    }else if (type == 'code') {
      cv.codepostal = e.target.value;
    }else if (type == 'ville') {
      cv.ville = e.target.value;
    }else if (type == 'dateNaiss') {
      cv.dateNaissance = e.target.value;
    }else if (type == 'lieuNaiss') {
      cv.lieuNaissance = e.target.value;
    }else if (type == 'etatCivile') {
      cv.etatCivil = e.target.value;
    }else if (type == 'permis') {
      cv.permisConduire = e.target.value;
    }
    
  }

  onImageChange(image: any) {
    this.cvInformationPersnnelleData.photoUrl = image;
  }
  onImageChanged = (image: any) => {
    this.cvInformationPersnnelleData.photoUrl == image;
  };



  public deposit(): void {
    this.amount += 100;
  }

  public get amount(): number {
    return this.accountService.amount;
  }
  public set amount(valuee: number) {
    this.accountService.amount = valuee;
  }




  //get set de cv
  public get cvInfo(): any {
    return this.accountService.cvInfo;
  }
  public set cvInfo(cvData: any) {
    this.accountService.cvInfo = cvData;
  }

 
}

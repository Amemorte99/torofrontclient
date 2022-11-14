import { Injectable } from '@angular/core';
import { InformationsPersonnelleModel } from 'src/app/models/informations-personnelle.models';

@Injectable({
  providedIn: 'root'
})



export class AccountService {

  public amount:number =100;

  public cvInfo? : {
    photoUrl?: string,
    photoUrl2?: string,
    prenom?: string,
    nomfamille?: string,
    mail?: string,
    titreprofil?: string,
    tel?: string,
    adresse?: string,
    codepostal?: string,
    ville?: string,
    dateNaissance?: string,
    lieuNaissance?:string,
    etatCivil?:string,
    permisConduire?:string

  }
  constructor() { }
}

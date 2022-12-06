import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InformationsPersonnelleModel } from 'src/app/models/informations-personnelle.models';

@Injectable({
  providedIn: 'root'
})



export class AccountService {

  public amount:number =100;

  public nomfamille?:string;

  public cvInfo : {
    photoUrl?: any,
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
    permisConduire?:string,



    //experience
      posteproun?:string,
      employeurproun?: string,
      villexpeproun?: string,
      datedebutproun?: string,
      datefinproun?: string,
      descriptionproun?: string,

      posteproun1?:string,
      employeurproun1?: string,
      villexpeproun1?: string,
      datedebutproun1?: string,
      datefinproun1?: string,
      descriptionproun1?: string,



    //profil
    description?: string,


    //formation
    nomformation?: string,
    etablissement?: string,
    villeFormation?: string,
    dateDebut?: string,
    dateFin?: string,
    descriptionformation?: string,

    //formatiob tableau

    nomformationT?: any[];
    etablissementT?: [],
    villeFormationT?: [],
    dateDebutT?: [],
    dateFinT?: [],
    descriptionformationT?: [],






    formation? : any [],

    qualite?:any[],



    //langue
    

   userlangRecv?: Object;

    //competence
    competence?:string,






  } = {}

  constructor() { }
}

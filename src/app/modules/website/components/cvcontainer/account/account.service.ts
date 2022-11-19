import { Injectable } from '@angular/core';
import { InformationsPersonnelleModel } from 'src/app/models/informations-personnelle.models';

@Injectable({
  providedIn: 'root'
})



export class AccountService {

  public amount:number =100;

  public nomfamille?:string;

  public cvInfo : {
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
    permisConduire?:string,

    //profil
    description?: string

    nomformation?: string,
    etablissement?: string,
    villeFormation?: string,
    dateDebut?: string,
    dateFin?: string,
    descriptionformation?: string,
   




    formation? : any []
    


 
    
   
      
    

  } = {}

  constructor() { }
}

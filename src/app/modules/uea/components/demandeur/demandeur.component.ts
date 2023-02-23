import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AccountService } from 'src/app/modules/website/components/cvcontainer/account/account.service';
import { SweetAlertService } from 'src/app/shared/common/sweet-alert.service';
import { AppelOffreService } from '../../common/appel-offre.service';
import { Router } from '@angular/router';
import { ChargerOffreService } from '../../common/charger-offre.service';

@Component({
  selector: 'app-demandeur',
  templateUrl: './demandeur.component.html',
  styleUrls: ['./demandeur.component.css']
})
export class DemandeurComponent implements OnInit {


  listOffre:any;
  ueaConnecte:any;

  listeOffreCharger:any;

  constructor(
    private formBuilder: FormBuilder,
    public accountService: AccountService,
    private sweetAlert: SweetAlertService,
    private appelService:AppelOffreService,
    private routers: Router,
    private chargerOffreService: ChargerOffreService
  ) { }

  ngOnInit(): void {

    this.listDetaiSA();

    this.ueaConnecte = JSON.parse(localStorage.getItem('ueaInfo')!);

    this.listChargerByIdUea(this.ueaConnecte.id);
  }



  listDetaiSA() {
    this.appelService.listAppel().subscribe((values) => {
        console.log("getByTypeOffre",values);
        this.listOffre = values.data;
      });
  }

  voirDetailOffre(e:any){

    //this.routers.navigate(['/utd/dashboard/offre'+e.id])
    this.routers.navigate(['/utd/dashboard/offre', e.id])
  }


  listChargerByIdUea(idUea:any){
    

    this.chargerOffreService.listChargerAppelOffreByIdUea(idUea).subscribe((_values)=>{


      if(_values){
        this.listeOffreCharger=_values.data;

      }
    })

  }


  voirOffreChargerByUea(e:any){

  }


}

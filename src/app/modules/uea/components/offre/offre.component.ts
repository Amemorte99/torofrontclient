import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { FormulaireService } from 'src/app/modules/website/common/formulaire.service';
import { SweetAlertService } from 'src/app/shared/common/sweet-alert.service';
import { AppelOffreService } from '../../common/appel-offre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChargerOffreService } from '../../common/charger-offre.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {

  listAppByid:any;
  idoffre!:number;
  ueaConnecte:any;

  listeOffreCharger:any;

  constructor(
    private formService: FormulaireService,
    private sweetAlert: SweetAlertService,
    private appelService:AppelOffreService,
    private routers: Router,
    private router: ActivatedRoute,
    private chargerOffreService: ChargerOffreService
  ) { }

  ngOnInit(): void {
    this.idoffre = parseInt(this.router.snapshot.params["id"]);
    console.log("idddddddd",this.idoffre)

    this.getByidOffre(this.idoffre);
    this.ueaConnecte = JSON.parse(localStorage.getItem('ueaInfo')!);

    this.listChargerByIdUea(this.ueaConnecte.id);


  }



  
  getByidOffre(id:any){
    this.appelService.getById(id).subscribe((values) => {
      if (values) {
        // this.prof = data.filter((dt: { ids: number; }) => dt.ids == this.id)
      
        this.listAppByid=values.data;
        
      }
    });
  }

  charger(){

    let idUea=this.ueaConnecte.id;
    this.chargerOffreService.chargerAppelOffre(idUea,this.idoffre).subscribe((__values)=>{
      if(__values.status==true){

        this.sweetAlert.showSuccessAlert(
          "Offre charger",
          "Offre charger avec succès"
        );
      }else{
        this.sweetAlert.showErrorAlert(
          "offre  déja charger",
          "chargement de l'offre échouée"
        );
        this.ngOnInit();

      }
    })
    
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

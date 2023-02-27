import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AccountService } from 'src/app/modules/website/components/cvcontainer/account/account.service';
import { SweetAlertService } from 'src/app/shared/common/sweet-alert.service';
import { AppelOffreService } from '../../common/appel-offre.service';
import { Router } from '@angular/router';
import { ChargerOffreService } from '../../common/charger-offre.service';
import { PostulerService } from '../../common/postuler.service';
import { FormulaireService } from 'src/app/modules/website/common/formulaire.service';

declare var $:any

@Component({
  selector: 'app-demandeur',
  templateUrl: './demandeur.component.html',
  styleUrls: ['./demandeur.component.css']
})
export class DemandeurComponent implements OnInit {


  listOffre:any;
  ueaConnecte:any;

  listeOffreCharger:any;



  listAppByid:any;
  idoffre!:number;



  type!:number;

  postulerData:any;


  loadData = false;
  idAppel!:number;
  idChargement!:number;

  
    fichier1!: File;
    fichier2!: File;
    fichier3!: File;
    images: any = [];

  constructor(
    private formBuilder: FormBuilder,
    public accountService: AccountService,
    private sweetAlert: SweetAlertService,
    private appelService:AppelOffreService,
    private routers: Router,
    private chargerOffreService: ChargerOffreService,
    private postulerService:PostulerService,
    private formService: FormulaireService,
  ) { }

  ngOnInit(): void {

    this.listDetaiSA();

    this.ueaConnecte = JSON.parse(localStorage.getItem('ueaInfo')!);

    this.listChargerByIdUea(this.ueaConnecte.id);


    
//typeModal
this.type=1;

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
    this.type=2;

    this.idAppel=e.candidature.id;
    this.idChargement=e.id;
    console.log("id app ",e)


  }

  retourModal(){

    this.type=1;

  }





 


  




  
  sending = false;

  mettreImage() {
    let profile = $("#addprofile");

    if (profile.prop("files") && profile.prop("files")[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(profile.prop("files")[0]);
      reader.onload = (e: any) => {
        let file = {
          lettreMotivation: e.target.result,
        };

        this.images.push(file);

        console.log(e.target.result);
        let value = URL.createObjectURL(profile.prop("files")[0]);
        $("#pdfprofile").attr("src", value + "#toolbar=0");
        console.log(value);
      };
      this.fichier1 = profile.prop("files")[0];
    }

    this.sending = true;
    $("#pdfbtn").removeClass("btn-primary").addClass("btn-success");
  }
  sendimage() {
    if (this.sending) {
      $("#addprofile").click();
    } else {
      $("#addprofile").click();
    }
  }

  mettreImageTwo() {
    let profile = $("#addprofileTwo");

    if (profile.prop("files") && profile.prop("files")[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(profile.prop("files")[0]);
      reader.onload = (e: any) => {
        let file = {
          cv: e.target.result,
        };

        this.images.push(file);

        let value = URL.createObjectURL(profile.prop("files")[0]);
        $("#pdfprofileTwo").attr("src", value + "#toolbar=0");
        console.log(value);
      };
      this.fichier2 = profile.prop("files")[0];
    }

    this.sending = true;
    $("#pdfbtnTwo").removeClass("btn-primary").addClass("btn-success");
  }

  sendimageTwo() {
    if (this.sending) {
      $("#addprofileTwo").click();
    } else {
      $("#addprofileTwo").click();
    }
  }

  mettreImageThree() {
    let profile = $("#addprofileThree");

    if (profile.prop("files") && profile.prop("files")[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(profile.prop("files")[0]);
      reader.onload = (e: any) => {
        let file = {
          diplome: e.target.result,
        };

        this.images.push(file);

        console.log(this.images);
        let value = URL.createObjectURL(profile.prop("files")[0]);
        $("#pdfprofileThree").attr("src", value + "#toolbar=0");
        console.log(value);
      };
      this.fichier3 = profile.prop("files")[0];
    }

    this.sending = true;
    $("#pdfbtnThree").removeClass("btn-primary").addClass("btn-success");
  }

  sendimageThree() {
    if (this.sending) {
      $("#addprofileThree").click();
    } else {
      $("#addprofileThree").click();
    }
  }

 

  postulerSaveFile(): void {
    console.log(this.fichier1);
    console.log(this.fichier2);
    console.log(this.fichier3);
    var formData = new FormData();
    
   
    formData.append("file", this.fichier1);
    formData.append("file", this.fichier2);
    formData.append("file", this.fichier3);


    this.formService.uploadFile(formData).subscribe((reponse)=>{

      if(reponse.status == true){
        console.log("upload de fichier effectuez avec succès",reponse.data)



        this.postulerData = {
          cv : reponse.data[0].toString(),
          lm:  reponse.data[1].toString(),
          appel: this.idAppel,
          uea:this.ueaConnecte.id,
          chargement:this.idChargement
        };
        console.log(this.postulerData)

       

        this.postulerService.createPostuler(this.postulerData).subscribe((values)=>{

          if(values.status==true){
    
            this.sweetAlert.showSuccessAlert(
              "Candidature envoyer",
              "Demande envoyé avec succès"
            );
          }
         
    
        })
       
       

        }
      
       
        $('#showListCharger').modal('hide');

    

    })
    this.ngOnInit();
    this.ngOnInit();
  

    

  }

}

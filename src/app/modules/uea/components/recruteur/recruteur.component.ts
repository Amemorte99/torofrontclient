import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormulaireService } from 'src/app/modules/website/common/formulaire.service';
import { AccountService } from 'src/app/modules/website/components/cvcontainer/account/account.service';
import { SweetAlertService } from 'src/app/shared/common/sweet-alert.service';
import { AppelOffreService } from '../../common/appel-offre.service';

import {  IDropdownSettings } from 'ng-multiselect-dropdown';
import SwiperCore, {Autoplay, Navigation, Pagination ,Mousewheel} from 'swiper';




// install Swiper modules
SwiperCore.use([Autoplay,Mousewheel, Pagination, Navigation]);


declare var $:any
@Component({
  selector: 'app-recruteur',
  templateUrl: './recruteur.component.html',
  styleUrls: ['./recruteur.component.css']
})
export class RecruteurComponent implements OnInit {


  offreForm!: FormGroup;

  listDetailSA:any;
  ueaConnecte:any;
  dataAppeleOffre:any;
  listAppelByIdUea:any;

  listAppByid:any;


  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:IDropdownSettings={} ;


  va:any

  option!:number;



  constructor(
    private formBuilder: FormBuilder,
    public accountService: AccountService,
    private formService: FormulaireService,
    private sweetAlert: SweetAlertService,
    private appelService:AppelOffreService
  ) { }

  ngOnInit(): void {
    this.listDetaiSA();
    this.ueaConnecte = JSON.parse(localStorage.getItem('ueaInfo')!);
    this.listOffreByIdUea(this.ueaConnecte.id);
    this.offreForm = this.formBuilder.group({
      libelle: ['', Validators.required],
      description: ['', Validators.required],
      resume: ['', Validators.required],
      adresse: ['',Validators.required],
      detailSA:['', Validators.required],
      typeOffre:['', Validators.required],
      jobTypes:['', Validators.required],
     
    });

    this.listTypeJob();

    this.option=1;


   

    this.dropdownSettings= {
      singleSelection: false,
      idField: 'id',
      textField: 'libelle',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };


    
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
    this.va=items;
  }
  listDetaiSA() {
    this.formService.listAllDetailSA().subscribe((values) => {
        console.log("mm",values);
        this.listDetailSA = values.data;
      });
  }

  listTypeJob() {
    this.appelService.listTypeJob().subscribe((values) => {
        console.log("mlistTypeJob",values);
        this.dropdownList = values.data;
      });
  }

  listOffreByIdUea(e :any) {
    this.appelService.ListAppelCandidatureByIdUEA(e).subscribe((values) => {
        console.log(values);
        this.listAppelByIdUea = values.data;
      });
  }

  get detailS (){
    return this.offreForm.get("detailSA")


  }


  soumettre(){
    

    this.offreForm.patchValue({
      detailSA:{
        id:this.offreForm.get("detailSA")?.value
      },
      jobTypes:this.selectedItems
      
    })

    this.dataAppeleOffre =this.offreForm.value;
    this.dataAppeleOffre.uea=this.ueaConnecte
    console.log("appel d'offre", this.offreForm.value)
    
    this.appelService.addAppelOffre(this.dataAppeleOffre).subscribe((dataValue) => {
      console.log(dataValue);

      if(dataValue.status == true){

        this.sweetAlert.showSuccessAlert(
          "Appel Offre lancer",
          "Appel offre lancer avec succès"
        );
        this.ngOnInit();

      }else{

        this.sweetAlert.showErrorAlert(
          "Appel Offre echouée",
          "veuillez verifier  les informations entrées"
        );

      }

    })


  }

  voirUea(data:any){
    this.appelService.getById(data.id).subscribe((values) => {
      if (values) {
        // this.prof = data.filter((dt: { ids: number; }) => dt.ids == this.id)
      
        this.listAppByid=values.data;
        console.log('uea by id',  this.listAppByid);
        
      }
    });
    setTimeout(() => {
      $("#modalDiscount").modal("show");
    }, 1000);

  }



  optionChoix(){
    if(this.option==1){
      this.option=10;
    }else{
      this.option=1;
    }
  }

  
  

  
}

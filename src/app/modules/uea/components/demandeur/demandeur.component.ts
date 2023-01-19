import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AccountService } from 'src/app/modules/website/components/cvcontainer/account/account.service';
import { SweetAlertService } from 'src/app/shared/common/sweet-alert.service';
import { AppelOffreService } from '../../common/appel-offre.service';

@Component({
  selector: 'app-demandeur',
  templateUrl: './demandeur.component.html',
  styleUrls: ['./demandeur.component.css']
})
export class DemandeurComponent implements OnInit {


  listOffre:any;

  constructor(
    private formBuilder: FormBuilder,
    public accountService: AccountService,
    private sweetAlert: SweetAlertService,
    private appelService:AppelOffreService
  ) { }

  ngOnInit(): void {

    this.listDetaiSA();
  }



  listDetaiSA() {
    this.appelService.listAppel().subscribe((values) => {
        console.log("getByTypeOffre",values);
        this.listOffre = values.data;
      });
  }

  voirDetailOffre(e:any){

  

  }


}

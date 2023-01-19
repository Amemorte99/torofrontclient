import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormulaireService } from 'src/app/modules/website/common/formulaire.service';
import { AccountService } from 'src/app/modules/website/components/cvcontainer/account/account.service';
import { SweetAlertService } from 'src/app/shared/common/sweet-alert.service';
import { AppelOffreService } from '../../common/appel-offre.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {


  listOffreStage:any;

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
    this.appelService.getByTypeOffre().subscribe((values) => {
        console.log("getByTypeOffre",values);
        this.listOffreStage = values.data;
      });
  }

  voirDetailOffre(e:any){

  

  }


}

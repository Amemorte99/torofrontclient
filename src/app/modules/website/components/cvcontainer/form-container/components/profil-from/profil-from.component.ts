import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../account/account.service';

@Component({
  selector: 'app-profil-from',
  templateUrl: './profil-from.component.html',
  styleUrls: ['./profil-from.component.css']
})
export class ProfilFromComponent implements OnInit {
  constructor(public accountService: AccountService) {}

  ngOnInit(): void {
  }
  cv = {
    letitreprofil: {
      description: ""
    }
  };
 

  launchValueOne(e: any) {
    // this.cvInformationPersnnelleData.prenom = e.target.value
    let cv = this.accountService.cvInfo;

    //   this.sendDataCv.emit(this.cvInformationPersnnelleData)
    console.log(cv);
    console.log(e.target.value);
 
      cv.description = e.target.value;
    
     
    
  }


  //get set de cv
  public get cvInfo(): any {
    return this.accountService.cvInfo;
  }
  public set cvInfo(cvData: any) {
    this.accountService.cvInfo = cvData;
  }

}

import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../account/account.service';

@Component({
  selector: 'app-cv-type3',
  templateUrl: './cv-type3.component.html',
  styleUrls: ['./cv-type3.component.css']
})
export class CvType3Component implements OnInit {

  constructor(public accountService : AccountService) { }

  ngOnInit(): void {
  }

  public get cvInfo(): any{
    return this.accountService.cvInfo;
  }
  public set cvInfo(cvData : any){
    this.accountService.cvInfo =cvData;
  }

}

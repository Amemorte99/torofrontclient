import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../account/account.service';

@Component({
  selector: 'app-cv-type5',
  templateUrl: './cv-type5.component.html',
  styleUrls: ['./cv-type5.component.css']
})
export class CvType5Component implements OnInit {


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

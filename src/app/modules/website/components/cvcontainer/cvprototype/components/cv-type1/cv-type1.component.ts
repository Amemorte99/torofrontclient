import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../../../account/account.service';

@Component({
  selector: 'app-cv-type1',
  templateUrl: './cv-type1.component.html',
  styleUrls: ['./cv-type1.component.css']
})
export class CvType1Component implements OnInit {
  @Input() cv: any = {}


  @Input() cvData: any;

  constructor(private accountService : AccountService) { }

  ngOnInit(): void {
  }


  public get amount(): number{
    return this.accountService.amount;
  }
  public set amount(value : number){
    this.accountService.amount =value;
  }


  public get cvInfo(): any{
    return this.accountService.amount;
  }
  public set cvInfo(cvData : any){
    this.accountService.cvInfo =cvData;
  }



}

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
  public config2 = {
    printMode: 'template-popup', // template
    popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
    pageTitle: '',
    stylesheets: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css' }],
    StyleSheet: "cv-type1.component.css",
    styles: ['td { border: 1px solid black; color: green; }', 'table { border: 1px solid black; color: red }', 'header, table, footer { margin: auto; text-align: center; }']
  }

}

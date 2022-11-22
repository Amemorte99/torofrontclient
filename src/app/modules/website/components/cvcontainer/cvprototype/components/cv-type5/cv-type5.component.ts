import { Component, OnInit } from '@angular/core';
import { NgxPrintElementService } from 'ngx-print-element';
import { AccountService } from '../../../account/account.service';

@Component({
  selector: 'app-cv-type5',
  templateUrl: './cv-type5.component.html',
  styleUrls: ['./cv-type5.component.css']
})
export class CvType5Component implements OnInit {


  constructor(public accountService : AccountService,public print: NgxPrintElementService) { }

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
    stylesheets: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css' },{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }],
    StyleSheet: "cv-type1.component.css",
    styles: ['td { border: 1px solid black; color: green; }', 'table { border: 1px solid black; color: red }', 'header, table, footer { margin: auto; text-align: center; }']
  }
 
}

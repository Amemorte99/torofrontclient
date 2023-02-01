import { Component, Input, OnInit } from '@angular/core';
import { NgxExtendedPdfViewerService, ProgressBarEvent } from 'ngx-extended-pdf-viewer';
import { NgxPrintElementService } from 'ngx-print-element';
import { AccountService } from '../../../account/account.service';

@Component({
  selector: 'app-cv-type1',
  templateUrl: './cv-type1.component.html',
  styleUrls: ['./cv-type1.component.css']
})
export class CvType1Component implements OnInit {

  imagee:any;
  
  @Input() cv: any = {}


  @Input() cvData: any;
  

  constructor(public accountService : AccountService,public printt: NgxPrintElementService,public pdfService: NgxExtendedPdfViewerService) { }


  ngOnInit(): void {
    this.imagee=localStorage.getItem("image")

   
    //alert("MANES MANA"+this.imagee)
  }


  public get amount(): number{
    return this.accountService.amount;
  }
  public set amount(value : number){
    this.accountService.amount =value;
  }


  public get cvInfo(): any{
    return this.accountService.cvInfo;
  }
  public set cvInfo(cvData : any){
    this.accountService.cvInfo =cvData;
  }




  public config = {
    printMode: 'template-popup', // template
    popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
    pageTitle: 'Hello World',
    templateString: '<header>I\'m part of the template header</header>{{printBody}}<footer>I\'m part of the template footer</footer>',
    stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
    styles: ['td { border: 1px solid black; color: green; }', 'table { border: 1px solid black; color: red }', 'header, table, footer { margin: auto; text-align: center; }']
  }
  public config2 = {
    printMode: 'template-popup', // template
    popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
    pageTitle: '',
    stylesheets: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css' }],
    StyleSheet: "cv-type1.component.css",
    styles: ['td { border: 1px solid black; color: green; }', 'table { border: 1px solid black; color: red }', 'header, table, footer { margin: auto; text-align: center; }']
  }


  public printPercentage = 0;
  public totalPages = 0;
  public currentPageRendered = 0;
  public showProgress = false;
  public showCompleted = false;
  public hideBuiltInProgress = true;

 

  public onBeforePrint() {
    if (this.hideBuiltInProgress) {
      const node = document.querySelector('.pdf-wrapper #printServiceDialog') as Element;
      node.setAttribute('style', 'display:none!important');
    }
    this.showCompleted = false;
    this.showProgress = true;
  }

  public onAfterPrint() {
    const node = document.querySelector('.pdf-wrapper #printServiceDialog') as Element;
    node.removeAttribute('style');
    this.showCompleted = true;
    this.showProgress = false;
  }

  public print() {
    this.pdfService.print();
  }

  public cancel() {
    document.getElementById('printCancel')?.click();
  }

  get isPrintCancelled(): boolean {
    return this.totalPages !== this.currentPageRendered;
  }

  public onProgress(event: ProgressBarEvent): void {
    if (this.showProgress) {
      this.totalPages = event.total;
      this.printPercentage = event.percent;
      this.currentPageRendered = event.page ?? 0;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import {MDCTopAppBar} from '@material/top-app-bar';
import { AccountService } from './account/account.service';

@Component({
  selector: 'app-cvcontainer',
  templateUrl: './cvcontainer.component.html',
  styleUrls: ['./cvcontainer.component.css']
})
export class CvcontainerComponent implements OnInit {

  dataValue: any



  ngOnInit(): void {
  }

  sendDataCvSecond(e: any) {
    console.log(e)
    this.dataValue = e
  }
 

}



// Instantiation

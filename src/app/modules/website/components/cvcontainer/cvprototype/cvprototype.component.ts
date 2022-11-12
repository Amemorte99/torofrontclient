import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cvprototype',
  templateUrl: './cvprototype.component.html',
  styleUrls: ['./cvprototype.component.css']
})
export class CvprototypeComponent implements OnInit {
  @Input() cv: any

  value = 1;
  constructor() { }

  ngOnInit(): void {
  }


  sendInformation(event:any){
    this.value = event
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-pied-model',
  templateUrl: './btn-pied-model.component.html',
  styleUrls: ['./btn-pied-model.component.css']
})
export class BtnPiedModelComponent implements OnInit {
  @Output() sendInformation: EventEmitter<any> = new EventEmitter()
  divStyle = 'div-default';


  constructor() { }

  ngOnInit(): void {
  }

  sendDataToParent(value:number ){
    this.sendInformation.emit(value)
  }

  toggleChange(): void {

    if (this.divStyle == 'div-changed') {
      this.divStyle = 'div-default';
    } else {
      this.divStyle = 'div-changed';
    }
  }
}

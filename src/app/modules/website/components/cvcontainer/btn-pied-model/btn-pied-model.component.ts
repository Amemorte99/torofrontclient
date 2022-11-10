import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-pied-model',
  templateUrl: './btn-pied-model.component.html',
  styleUrls: ['./btn-pied-model.component.css']
})
export class BtnPiedModelComponent implements OnInit {

  divStyle = 'div-default';


  constructor() { }

  ngOnInit(): void {
  }

  toggleChange(): void {

    if (this.divStyle == 'div-changed') {
      this.divStyle = 'div-default';
    } else {
      this.divStyle = 'div-changed';
    }
  }
}

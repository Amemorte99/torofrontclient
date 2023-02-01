import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utd',
  templateUrl: './utd.component.html',
  styleUrls: ['./utd.component.css']
})
export class UtdComponent implements OnInit {
  divStyle = 'side-width';

  mouseIsOver=true;

  constructor() { }

  ngOnInit(): void {
  }

  mouse(){

    if (this.divStyle == 'div-changed') {
      this.divStyle = 'side-width';
    } else {
      this.divStyle = 'div-changed';
    }

  }

}

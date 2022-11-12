import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-type1',
  templateUrl: './cv-type1.component.html',
  styleUrls: ['./cv-type1.component.css']
})
export class CvType1Component implements OnInit {

  @Input() cvData: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}

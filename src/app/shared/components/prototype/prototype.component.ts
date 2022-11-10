import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.css']
})
export class PrototypeComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}

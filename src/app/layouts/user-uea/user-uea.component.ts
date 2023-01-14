import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-uea',
  templateUrl: './user-uea.component.html',
  styleUrls: ['./user-uea.component.css']
})
export class UserUEAComponent implements OnInit {

  ueaConnecte:any;

  constructor() { }

  ngOnInit(): void {
    this.ueaConnecte=JSON.parse(localStorage.getItem("ueaInfo")!);
  }

}

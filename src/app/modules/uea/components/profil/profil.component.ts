import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  ueaConnecte:any;
  age:any;

  
  

  constructor() { }

  ngOnInit(): void {
    this.ueaConnecte = JSON.parse(localStorage.getItem('ueaInfo')!);
   
   
    console.log("Age", this.ueaConnecte.dateNaissance);
    this.age=this.calculAge(`${this.ueaConnecte.dateNaissance}`);
   


  }


  calculAge(date :any){
    let birthdate:Date = new Date(date);
let today:Date = new Date();
let age:number = today.getFullYear() - birthdate.getFullYear();
let m:number = today.getMonth() - birthdate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
    age--;
}
console.log(`Age: ${age}`);
return age;


  }

}

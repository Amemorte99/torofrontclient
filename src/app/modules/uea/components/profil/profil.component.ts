import { Component, OnInit } from '@angular/core';
import { HistoriqueUEAService } from '../../common/historique-uea.service';
import { SweetAlertService } from 'src/app/shared/common/sweet-alert.service';
declare var $:any
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  ueaConnecte:any;
  age:any;
  histUEAConnecte:any;
  listHistoAByid:any;

  
  

  constructor(
   private histoService:HistoriqueUEAService,
    private sweetAlert: SweetAlertService,
  ) { }

  ngOnInit(): void {
    this.ueaConnecte = JSON.parse(localStorage.getItem('ueaInfo')!);


    this.listDetaiSA(this.ueaConnecte.id);
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

  listDetaiSA(e:any) {
    this.histoService.getByIdUEA(e).subscribe((values) => {
        console.log("histUEAConnecte",values);
        this.histUEAConnecte = values.data;
      });
  }

  voirHisto(e:any){

    this.histoService.getById(e).subscribe((values) => {
      if (values) {
        // this.prof = data.filter((dt: { ids: number; }) => dt.ids == this.id)
      
        this.listHistoAByid=values.data;
        console.log('uea by id',  this.listHistoAByid);
        
      }
    });
    setTimeout(() => {
      $("#ueabyId").modal("show");
    }, 1000);


  }

  

}

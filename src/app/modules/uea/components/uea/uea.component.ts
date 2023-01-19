import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormationService } from '../../common/formation.service';
import { UeaService } from '../../common/uea.service';
declare var $:any
@Component({
  selector: 'app-uea',
  templateUrl: './uea.component.html',
  styleUrls: ['./uea.component.css']
})
export class UeaComponent implements OnInit {





  listUEA:any;
  listUEAByid:any

  constructor(
    private router: Router,
    private ueaservice:UeaService
  ) {}


  ngOnInit(): void {
    this.listUea();
  }



  listUea(){

    this.ueaservice.listUea().subscribe((values) => {
      if (values) {
        // this.prof = data.filter((dt: { ids: number; }) => dt.ids == this.id)
        //console.log('list uea', values);
        this.listUEA=values.data;
      }
    });

  }

  voirUea(data:any){

    this.ueaservice.getById(data.id).subscribe((values) => {
      if (values) {
        // this.prof = data.filter((dt: { ids: number; }) => dt.ids == this.id)
      
        this.listUEAByid=values.data;
        console.log('uea by id',  this.listUEAByid);
        
      }
    });
    setTimeout(() => {
      $("#ueabyId").modal("show");
    }, 1000);


  }

}

import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { FormulaireService } from 'src/app/modules/website/common/formulaire.service';
import { SweetAlertService } from 'src/app/shared/common/sweet-alert.service';
import { AppelOffreService } from '../../common/appel-offre.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {

  listAppByid:any;
  idoffre!:number

  constructor(
    private formService: FormulaireService,
    private sweetAlert: SweetAlertService,
    private appelService:AppelOffreService,
    private routers: Router,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.idoffre = parseInt(this.router.snapshot.params["id"]);
    console.log("idddddddd",this.idoffre)

    this.getByidOffre(this.idoffre);


  }



  
  getByidOffre(id:any){
    this.appelService.getById(id).subscribe((values) => {
      if (values) {
        // this.prof = data.filter((dt: { ids: number; }) => dt.ids == this.id)
      
        this.listAppByid=values.data;
        
      }
    });
  }

}

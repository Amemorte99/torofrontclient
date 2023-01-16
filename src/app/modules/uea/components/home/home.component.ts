import { Component, OnInit,ViewEncapsulation, ViewChild  } from '@angular/core';
import SwiperCore, {Autoplay, Navigation, Pagination ,Mousewheel} from 'swiper';
import { FormationService } from '../../common/formation.service';
import { Router } from '@angular/router';




// install Swiper modules
SwiperCore.use([Autoplay,Mousewheel, Pagination, Navigation]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  ueaConnecte:any;
  isCollapsed = false;
  role!:number;


  token:any
  ngOnInit(): void {

  
    
  }

  constructor(
    private  formationService:FormationService,
    private router: Router
  ) {

  }

  
  listeFormation() {
    this.formationService
      .ListFormation()
      .subscribe((values) => {
        if (values) {
         
          // this.prof = data.filter((dt: { ids: number; }) => dt.ids == this.id)
          console.log("list formation",values);
        }
      });
  }


 

  



}





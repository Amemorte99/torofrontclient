import { Component, OnInit,ViewEncapsulation, ViewChild  } from '@angular/core';
import SwiperCore, {Autoplay, Navigation, Pagination ,Mousewheel} from 'swiper';




// install Swiper modules
SwiperCore.use([Autoplay,Mousewheel, Pagination, Navigation]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {


  isCollapsed = false;
  ngOnInit(): void {
  }

  constructor() {

  }
}





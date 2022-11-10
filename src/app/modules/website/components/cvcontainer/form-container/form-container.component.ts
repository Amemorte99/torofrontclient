import { Component, Input, OnInit, ɵSafeResourceUrl } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit {

  //  }
  constructor(
    // private cpService : ColorPickerService,

    // public router : Router
  ) { }


  ngOnInit(): void {

  }
  save(cv: any) {
    // console.log(cv)
    // this.cvValue = cv
    // console.log(this.cvValue)

  }




}

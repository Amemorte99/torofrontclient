import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { AccountService } from '../../../account/account.service';

@Component({
  selector: 'app-experience-from',
  templateUrl: './experience-from.component.html',
  styleUrls: ['./experience-from.component.css']
})
export class ExperienceFromComponent implements OnInit {


  myCount: any = 0;
  myproductForm!: FormGroup;







  @Input()
  count: any = 0;
  @Output()
  change: EventEmitter<number> = new EventEmitter<any>();
  @Output()  onFormGroupChange:EventEmitter<any> = new EventEmitter<any>();
  @Input() productForm!: FormGroup;
  constructor(private fb:FormBuilder,public accountService: AccountService) {
    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]) ,
    });
    this.myproductForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]) ,
    });
  }
  formCheck :any  = ''
  public onFormGroupChangeEvent(_event: any) {
      this.myproductForm = _event
    this.formCheck = _event;
    console.error(_event, this.formCheck['controls'])
  }
  countChange(event: number) {
    this.myCount = event;
}

  increment() {
    this.count++;
    this.change.emit(this.count);

  }

  decrement() {
    if (this.count != 0) {
    this.count--;

  }

 }
 quantities() : FormArray {
  return this.productForm.get("quantities") as FormArray
 }

 newQuantity(): FormGroup {
  return this.fb.group({
    experiencepro: {
      experienceproun: {
        posteproun: "",
        employeurproun: "",
        villeexpeproun: "",
        datedebutproun: "",
        datefinproun: "",
        descriptionproun: ""
      },    experienceprodeux: {
        posteprodeux: "",
        employeurprodeux: "",
        villeexpeprodeux: "",
        datedebutprodeux: "",
        datefinprodeux: "",
        descriptionprodeux: ""
      }
    }
  })
 }

 addQuantity() {
  this.quantities().push(this.newQuantity());

 }

 removeQuantity(i:number) {
  this.quantities().removeAt(i);
 }

 onSub() {
  console.log(this.productForm.value);
 }





  ngOnInit(): void {

  }

  cv = {


    experiencepro: {
      experienceproun: {
        posteproun: "",
        employeurproun: "",
        villeexpeproun: "",
        datedebutproun: "",
        datefinproun: "",
        descriptionproun: ""
      }

    }

  };


  launchValue() {

  }


  launchValueOne(e: any, type: string) {
    // this.cvInformationPersnnelleData.prenom = e.target.value
    let cv = this.accountService.cvInfo;

    //   this.sendDataCv.emit(this.cvInformationPersnnelleData)


    if (type == 'postepro') {
      cv.posteproun = e.target.value;
    }  else if (type == 'employeurpro') {
      cv.employeurproun = e.target.value;
    }
     else if (type == 'datedebutpro') {
      cv.datedebutproun = e.target.value;
    }else if (type == 'descriptionpro') {
      cv.descriptionproun = e.target.value;
    }else if (type == 'postepro') {
      cv.posteproun = e.target.value;
    }
    else if (type == 'employeurpro') {
      cv.employeurproun = e.target.value;
    }else if (type == 'villexpepro') {
      cv.villexpeproun = e.target.value;
    }else if (type == 'datedebutpro') {
      cv.datedebutproun = e.target.value;
    }else if (type == 'datefinpro') {
      cv.datefinproun = e.target.value;
    }else if (type == 'descriptionpro') {
      cv.descriptionproun = e.target.value;
    }else if (type == 'permis') {
      cv.permisConduire = e.target.value;
    }

    else if (type == 'postepro1') {
      cv.posteproun1 = e.target.value;
    }  else if (type == 'employeurpro1') {
      cv.employeurproun1 = e.target.value;
    }
     else if (type == 'datedebutpro') {
      cv.datedebutproun1 = e.target.value;
    }else if (type == 'descriptionpro1') {
      cv.descriptionproun1 = e.target.value;
    }else if (type == 'postepro1') {
      cv.posteproun1 = e.target.value;
    }
    else if (type == 'employeurpro1') {
      cv.employeurproun1 = e.target.value;
    }else if (type == 'villexpepro1') {
      cv.villexpeproun1 = e.target.value;
    }else if (type == 'datedebutpro1') {
      cv.datedebutproun1 = e.target.value;
    }else if (type == 'datefinpro1') {
      cv.datefinproun1 = e.target.value;
    }else if (type == 'descriptionpro1') {
      cv.descriptionproun1 = e.target.value;
    }


  }

}

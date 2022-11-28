import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { AccountService } from '../../../account/account.service';


@Component({
  selector: 'app-formation-from',
  templateUrl: './formation-from.component.html',
  styleUrls: ['./formation-from.component.css'],


})

export class FormationFromComponent implements OnInit {





  title = 'bbbb';
  myCount: any = 0;
  myproductForm!: FormGroup;

/*   formationT=[];
  nomformationT= [];
    etablissementT= [];
    villeFormationT= [];
    dateDebutT= [];
    dateFinT= [];
    descriptionformationT= []; */





  @Input()
  count: any = 0;
  @Output()
  change: EventEmitter<number> = new EventEmitter<any>();
  @Output()  onFormGroupChange:EventEmitter<any> = new EventEmitter<any>();
  @Input() productForm!: FormGroup;


  constructor(private fb:FormBuilder,public accountService: AccountService) {
    this.productForm = this.fb.group({
      name: '',
      formations: this.fb.array([]) ,
    });
    this.myproductForm = this.fb.group({
      name: '',
      formations: this.fb.array([]) ,
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
 formations() : FormArray {
  return this.productForm.get("formations") as FormArray
 }

 newFormation(): FormGroup {

  return this.fb.group({
  



    nomformationT: "",
    etablissementT: "",
    villeFormationT: "",
    dateDebutT: "",
    dateFinT: "",
    descriptionformationT: "",
  })
 }

 addFormation() {
  this.formations().push(this.newFormation());

 }

 removeFormation(i:number) {
  this.formations().removeAt(i);
 }

 onSub() {
  console.log(this.productForm.value);
 }





  ngOnInit(): void {

  }



  launchValue() {

  }

  launchValueOne(e: any, type: string) {
    // this.cvInformationPersnnelleData.prenom = e.target.value
    let cv = this.accountService.cvInfo;
    //this.quantities.controls[index].value.material = item.nombre

    //   this.sendDataCv.emit(this.cvInformationPersnnelleData)

    console.log(cv);
    console.log(e.target.value);
    if (type == 'formation') {
      cv.nomformation = e.target.value;

    } else if (type == 'etablissement') {
      cv.etablissement = e.target.value;
    } else if (type == 'villeFormation') {
      cv.villeFormation = e.target.value;
    }else if (type == 'dateDebut') {
      cv.dateDebut = e.target.value;
    }else if (type == 'dateFin') {
      cv.dateFin = e.target.value;
    }
    else if (type == 'descriptionformation') {
      cv.descriptionformation = e.target.value;
    }
    
    
    




    

  }

  tableauData(e: any,type :string){

    let cv = this.accountService.cvInfo;


      console.log(cv);
    console.log(e.target.value);


    if (type == 'formationT[]') {
      cv.nomformationT = e.target.value;

    } else if (type == 'etablissementT') {
      cv.etablissementT = e.target.value;
    } else if (type == 'villeFormationT') {
      cv.villeFormationT = e.target.value;
    }else if (type == 'dateDebutT') {
      cv.dateDebutT = e.target.value;
    }else if (type == 'dateFinT') {
      cv.dateFinT = e.target.value;
    }
    else if (type == 'descriptionformation') {
      cv.descriptionformationT = e.target.value;


      cv.descriptionformationT== e.target.value;
      //this.post.push
    }



    
  }

  










}


import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
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
  formCheck :any  = ''

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
      formations: this.fb.array([]),

    });


    
  }

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
    nomformationT: [''],
    etablissementT: [''],
    villeFormationT: [''],
    dateDebutT: [''],
    dateFinT: [''],
    descriptionformationT: [''],
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






  launchValueOne(e: any, a : string){
    
  }










}


import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { CvDataModel } from 'src/app/models/cv-data.models';
import { LesactiviteextraproModel } from 'src/app/models/lesactivitesextrapro.models';

@Component({
  selector: 'app-activite-form',
  templateUrl: './activite-form.component.html',
  styleUrls: ['./activite-form.component.css']
})
export class ActiviteFormComponent implements OnInit {

  title = 'bbbb';
  myCount: any = 0;
  myproductForm!: FormGroup;

  cvActiviteData!: LesactiviteextraproModel;

  @Input()
  count: any = 0;
  @Output()
  change: EventEmitter<number> = new EventEmitter<any>();
  @Output()  onFormGroupChange:EventEmitter<any> = new EventEmitter<any>();
  @Input() productForm!: FormGroup;
  constructor(private fb:FormBuilder) {
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
    lesactiviteextrapro: {
      aproposte: "",
      aproemployeur: "",
      aproville: "",
      aprodatedeb: "",
      aprodatefin: "",
      aprodescription: ""
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

    this.cvActiviteData = {
        aproposte: "",
        aproemployeur: "",
        aproville: "",
        aprodatedeb: "",
        aprodatefin: "",
        aprodescription: ""
    };

  }

  
  launchValue() {
   
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-centre-from',
  templateUrl: './centre-from.component.html',
  styleUrls: ['./centre-from.component.css']
})
export class CentreFromComponent implements OnInit {

  myCount: any = 0;
  myproductForm!: FormGroup;



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
    interet: {
      interet: ""
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

    interet: {
      interet: "",

    }


  };

  launchValue() {

  }

}

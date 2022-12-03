import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AccountService } from '../../../account/account.service';

@Component({
  selector: 'app-langue-form',
  templateUrl: './langue-form.component.html',
  styleUrls: ['./langue-form.component.css']
})
export class LangueFormComponent implements OnInit {


  public userForm: FormGroup;

constructor(private fb:FormBuilder,public accountService: AccountService) {

    this.userForm = this.fb.group({
      address: this.fb.array([this.addAddressGroup()])
    });
  }


 onSub() {
 
  console.log(this.userForm.value);
 }

 onSubOne(e :any) {
 

 
  console.log(this.userForm.value);

  let cv = this.accountService.cvInfo;

  cv.userlangRecv=this.userForm.value;

  
  
  
  //cv.langue = e.target.value;

 }


  ngOnInit(): void {
  }
  



 
  //Append Fields Set
  private addAddressGroup(): FormGroup {
    return this.fb.group({
      langue:[],
      niveau:[]
    });
  }
  //Add Fields
  addAddress(): void {
    this.addressArray.push(this.addAddressGroup());
  }
 
  //Remove Fields
  removeAddress(index: number): void {
    this.addressArray.removeAt(index);
  }
  //Fields Array
  get addressArray(): FormArray {
    return <FormArray>this.userForm.get('address');
  }

}

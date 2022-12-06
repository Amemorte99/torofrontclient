import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { AccountService } from '../../../account/account.service';

@Component({
  selector: 'app-qualite-form',
  templateUrl: './qualite-form.component.html',
  styleUrls: ['./qualite-form.component.css']
})
export class QualiteFormComponent implements OnInit {

  public userForm: FormGroup;


  
  constructor(private fb:FormBuilder,public accountService: AccountService) {
    this.userForm = this.fb.group({
      qualite: this.fb.array([this.addAQualiteGroup()])
    });
  }


 

  onSubOne(e :any) {
 

 
    console.log(this.userForm.value);
  
    let cv = this.accountService.cvInfo;
  
    cv.qualite=this.userForm.value;
  
    
    
    
    //cv.langue = e.target.value;
  
   }



  ngOnInit(): void {
  }

 


   //Append Fields Set
   private addAQualiteGroup(): FormGroup {
    return this.fb.group({
      qualite:[]
    });
  }
  //Add Fields
  addAddress(): void {
    this.qualiteArray.push(this.addAQualiteGroup());
  }
 
  //Remove Fields
  removeAddress(index: number): void {
    this.qualiteArray.removeAt(index);
  }
  //Fields Array
  get qualiteArray(): FormArray {
    return <FormArray>this.userForm.get('qualite');
  }

}

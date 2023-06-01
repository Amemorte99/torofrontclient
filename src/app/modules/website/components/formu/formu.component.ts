import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SweetAlertService } from 'src/app/shared/common/sweet-alert.service';
import { FormulaireService } from '../../common/formulaire.service';

@Component({
  selector: 'app-formu',
  templateUrl: './formu.component.html',
  styleUrls: ['./formu.component.css']
})
export class FormuComponent implements OnInit {



  creationForm!: FormGroup;

  body:any = {
    email:"",
    username:"",
    password:"",
    roleName:""
  };

  constructor(
    private formService: FormulaireService,
    private sweetAlert: SweetAlertService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {

    this.creationForm=this.fb.group({
      email : ['',Validators.compose([Validators.required])],
      username : ['',Validators.compose([Validators.required])],
      password : ['',Validators.compose([Validators.required])],
      roleName : ['',Validators.compose([Validators.required])]
    })
  }

  get email (){
    return this.creationForm.get("email")
  }

  get username (){
    return this.creationForm.get("username")
  }

  get password (){localhost:8080
    return this.creationForm.get("password")
  }
  get roleName (){
    return this.creationForm.get("roleName")
  }


  soumettreCode(){


    this.body.email=this.email?.value;
    this.body.username=this.username?.value;
    this.body.password=this.password?.value;
    this.body.roleName=this.roleName?.value;

    console.log("mannnnnnnes", JSON.stringify(this.body))

    this.formService.saveForm(this.body).subscribe((value) =>{
      if(value){
        console.log("koisonn"+JSON.stringify(value));
        this.sweetAlert.showSuccessAlert(
          "Code  Envoyer",
          "Opération effectuer avec success"
        );
     }else{
      this.sweetAlert.showErrorAlert(
        "information erronée",
        "Opération effectuer avec success"
      );

     }
     })
  }

}

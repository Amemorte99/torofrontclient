import { Component, OnInit } from '@angular/core';
import { HistoriqueUEAService } from '../../common/historique-uea.service';
import { SweetAlertService } from 'src/app/shared/common/sweet-alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UeaService } from '../../common/uea.service';
import { AuthService } from 'src/app/modules/website/components/auth/common/auth.service';
declare var $:any
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  ueaConnecte:any;
  age:any;
  histUEAConnecte:any;
  listHistoAByid:any;
  bodyData:any;

  
  resetForm!: FormGroup;

  constructor(
   private histoService:HistoriqueUEAService,
    private sweetAlert: SweetAlertService,
    private formBuilder: FormBuilder,
    private ueaservice:UeaService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.ueaConnecte = JSON.parse(localStorage.getItem('ueaInfo')!);


    this.listDetaiSA(this.ueaConnecte.id);
    console.log("Age", this.ueaConnecte.dateNaissance);
    this.age=this.calculAge(`${this.ueaConnecte.dateNaissance}`);


    this.resetForm = this.formBuilder.group({
      old_password: ['', Validators.required],
      new_password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      
     
    });
   


  }


  calculAge(date :any){
    let birthdate:Date = new Date(date);
let today:Date = new Date();
let age:number = today.getFullYear() - birthdate.getFullYear();
let m:number = today.getMonth() - birthdate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
    age--;
}
console.log(`Age: ${age}`);
return age;


  }

  listDetaiSA(e:any) {
    this.histoService.getByIdUEA(e).subscribe((values) => {
        console.log("histUEAConnecte",values);
        this.histUEAConnecte = values.data;
      });
  }



 
  voirHisto(e:any){

    this.histoService.getById(e).subscribe((values) => {
      if (values) {
        // this.prof = data.filter((dt: { ids: number; }) => dt.ids == this.id)
      
        this.listHistoAByid=values.data;
        console.log('uea by id',  this.listHistoAByid);
        
      }
    });
    setTimeout(() => {
      $("#ueabyId").modal("show");
    }, 1000);


  }

  resetPassword(){

    let speudo=this.ueaConnecte!.username;

    this.bodyData=this.resetForm.value;

    console.log("reset info ",this.bodyData,"username",speudo);


    this.ueaservice.resetPassord(speudo,this.bodyData).subscribe( (value)=>{

    

      if(value.status == true){
        this.sweetAlert.showSuccessAlert(
          value.message,
          "Modification  mot de passe  avec succces"
        );
        this.authService.logout();

      }else{
        this.sweetAlert.showErrorAlert(
          value.message,
          "Modifiacation echouée  "
        );
      }

    })

  


    
  }

  

}

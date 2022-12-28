import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';
import { ImagePickerConf } from 'ngp-image-picker';
import { BehaviorSubject, Subscription, take } from 'rxjs';
import { AccountService } from '../cvcontainer/account/account.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {



  hide = true;
  hide1 = true;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

 imagee: any





  personalDetails!: FormGroup;
  addressDetails!: FormGroup;
  educationalDetails!: FormGroup;
  personal_step = false;
  address_step = false;
  education_step = false;
  step = 1;



  //formulaire

  personelDetails!: FormGroup
  payementDetails! : FormGroup
  persenal_step = false;
  payement_step = false;


  loading = false;

    stepp = 0;

















  imagePickerConf: ImagePickerConf = {
    borderRadius: "6px",
    language: "fr",
    width: "240PX",
    height: "240PX",
    //hideDeleteBtn: true,
    //hideDownloadBtn: true,
    //hideEditBtn: true,
  };





  constructor(private formBuilder: FormBuilder,public accountService: AccountService) {


  }
  ngOnInit(): void {
    this.subscription = this.control.valueChanges.subscribe((values: Array<File>) => this.getImage(values[0]));

    this.personelDetails = this.formBuilder.group({
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['',Validators.required],
      dob: ['', Validators.required],
      genre: ['', Validators.required],
      domaine :['', Validators.required],
      secteur:['', Validators.required],



  });

  this.payementDetails = this.formBuilder.group({
    pay: ['', Validators.required],

});



    this.personalDetails = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['',Validators.required]
  });

  this.addressDetails = this.formBuilder.group({
      city: ['', Validators.required],
      address: ['', Validators.required],
      pincode: ['',Validators.required]
  });

  this.educationalDetails = this.formBuilder.group({
      highest_qualification: ['', Validators.required],
      university: ['', Validators.required],
      total_marks: ['',Validators.required]
  });

  }
  selectedFile: any = null;

  onFileSelected(event: any): void {
      this.selectedFile = event.target.files[0] ?? null;

  }

  public readonly uploadedFile: BehaviorSubject<String | any> = new BehaviorSubject(null);

  private subscription!: Subscription;

  public readonly control = new FileUploadControl(
      { listVisible: true, accept: ['image/*'], discardInvalid: true, multiple: false },
      [FileUploadValidators.accept(['image/*']), FileUploadValidators.filesLimit(1)]
  );



  public ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  private getImage(file: File): void {
      if (FileReader && file) {
          const fr = new FileReader();
          fr.onload = (e : any) => this.uploadedFile.next(e.target.result);
          fr.readAsDataURL(file);
      } else {
          this.uploadedFile.next(null);
      }
  }

  onImageChanged(image:any){
    localStorage.setItem("image",image)

    //let imagee=localStorage.getItem("image")

    //alert(imagee)

    //this.imagee=localStorage.getItem("image")

    //let cv = this.accountService.cvInfo;


    this.imagee=localStorage.getItem("image")

  }





  get personalInformation() { return this.personelDetails.controls; }

  get payementInformation() { return this.payementDetails.controls; }

  oneSubmit(){

    if(this.step==2){
      this.education_step = true;
      if (this.educationalDetails.invalid) { return }
      alert("Well done!!")
    }
  }

  Oneprevious(){
    this.stepp--

    if(this.stepp==1){
      this.payement_step = false;
    }
  }


  onNext(){

    if(this.stepp==1){
          this.persenal_step = true;
          if (this.personelDetails.invalid) { return  }
          this.stepp=20
    }
  }

  soumettre(){
    if (this.personelDetails.invalid) { return  }

    this.stepp=20

  }












  get personal() { return this.personalDetails.controls; }

  get address() { return this.addressDetails.controls; }

  get education() { return this.educationalDetails.controls; }
  next(){

    if(this.step==1){
          this.personal_step = true;
          if (this.personalDetails.invalid) { return  }
          this.step++
    }

    else if(this.step==2){
        this.address_step = true;
        if (this.addressDetails.invalid) { return }
            this.step++;
    }


  }

  previous(){
    this.step--

    if(this.step==1){
      this.address_step = false;
    }
    if(this.step==2){
      this.education_step = false;
    }

  }

  submit(){

    if(this.step==3){
      this.education_step = true;
      if (this.educationalDetails.invalid) { return }
      alert("Well done!!")
    }
  }



  setepChoix(choix:number){

    this.stepp=choix;

  this.ngOnInit();


  }






}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



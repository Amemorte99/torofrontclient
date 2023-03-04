import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import {FormControl,Validators,FormGroupDirective,NgForm,FormGroup,FormBuilder} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {
  FileUploadControl,
  FileUploadValidators,
} from '@iplab/ngx-file-upload';
import { ImagePickerConf } from 'ngp-image-picker';
import { BehaviorSubject, Observable, Subscription, take } from 'rxjs';
import { AccountService } from '../cvcontainer/account/account.service';
import { FormulaireService } from '../../common/formulaire.service';
import { SweetAlertService } from 'src/app/shared/common/sweet-alert.service';
import { Stagiaire } from '../../../../models/stagiaire.model';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent implements OnInit {
  hide = true;
  hide1 = true;
  emailFormControl = new FormControl('', [Validators.required,Validators.email,]);
  matcher = new MyErrorStateMatcher();
  imagee: any;
  img:any;
  mesImage:any ={};
  listDetailSA: any;
  typeU!: number;
  personalDetails!: FormGroup;
  addressDetails!: FormGroup;
  educationalDetails!: FormGroup;
  personal_step = false;
  address_step = false;
  education_step = false;
  step = 1;

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  preview = '';
  imageInfos?: Observable<any>;
  imageData: any = [];

  //formulaire
  personelDetails!: FormGroup;
  payementDetails!: FormGroup;
  persenal_step = false;
  payement_step = false;
  loading = false;
  stepp = 0;
  stagiaire!: Stagiaire;

  imagePickerConf: ImagePickerConf = {
    borderRadius: '6px',
    language: 'fr',
    width: '240PX',
    height: '240PX',
   
  };

  // code by wonder 
  fichier1!: File;
  leFichierSelectionnee!: any;
  leNomDuFichierSelectionnee!: any
  dataFichier: any = [];
  dataFichierName: any = [];

  constructor(
    private formBuilder: FormBuilder,
    public accountService: AccountService,
    private formService: FormulaireService,
    private sweetAlert: SweetAlertService
  ) {}
  ngOnInit(): void {
    this.subscription = this.control.valueChanges.subscribe(
      (values: Array<File>) => this.getImage(values[0])
    );
    this.listDetaiSA();

    this.personelDetails = this.formBuilder.group(
      {
        prenom: ['', Validators.required],
        adresse: ['', Validators.required],
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        dob: ['', Validators.required],
        genre: ['', Validators.required],
        secteur: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required],
        typeUEA:['', Validators.required],

        confirm_password: ['', [Validators.required]],
      },
      {
        validator: this.ConfirmedValidator('password', 'confirm_password'),
      }
    );

    this.payementDetails = this.formBuilder.group({
      pay: ['', Validators.required],
    });

    this.addressDetails = this.formBuilder.group({
      city: ['', Validators.required],
      address: ['', Validators.required],
      pincode: ['', Validators.required],
    });

    this.educationalDetails = this.formBuilder.group({
      highest_qualification: ['', Validators.required],
      university: ['', Validators.required],
      total_marks: ['', Validators.required],
    });
  }
  selectedFile: any = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  }

  public readonly uploadedFile: BehaviorSubject<String | any> =
    new BehaviorSubject(null);

  private subscription!: Subscription;

  public readonly control = new FileUploadControl(
    {
      listVisible: true,
      accept: ['image/*'],
      discardInvalid: true,
      multiple: false,
    },
    [
      FileUploadValidators.accept(['image/*']),
      FileUploadValidators.filesLimit(1),
    ]
  );

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getImage(file: File): void {
    if (FileReader && file) {
      const fr = new FileReader();
      fr.onload = (e: any) => this.uploadedFile.next(e.target.result);
      fr.readAsDataURL(file);
    } else {
      this.uploadedFile.next(null);
    }
  }

  onImageChanged(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imagee = reader.result as string;
    };
  }


  selectFile(event: any): void {
    this.message = '';
    this.preview = '';
    this.progress = 0;
    this.selectedFiles = event.target.files;


    console.log("iiiiiii",this.selectedFiles)

    this.imageData.push(this.selectedFiles);

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.preview = '';
        this.currentFile = file;

        const reader = new FileReader();

        reader.onload = (e: any) => {
         
          this.preview = e.target.result;
          this.mesImage.img.push(this.preview);

          localStorage.setItem('image', this.preview);
         // this.imagee = localStorage.getItem('image');
        };

        reader.readAsDataURL(this.currentFile);
      }
    }
  }








  
  get personalInformation() {
    return this.personelDetails.controls;
  }

  get payementInformation() {
    return this.payementDetails.controls;
  }

  get email() {
    return this.personelDetails.get('email');
  }

  get username() {
    return this.personelDetails.get('username');
  }

  get password() {
    return this.personelDetails.get('password');
  }

  get name() {
    return this.personelDetails.get('name');
  }

  get prenom() {
    return this.personelDetails.get('prenom');
  }

  get adresse() {
    return this.personelDetails.get('adresse');
  }

  get dateNaissance() {
    return this.personelDetails.get('dob');
  }

  get genre() {
    return this.personelDetails.get('genre');
  }
  get tel() {
    return this.personelDetails.get('phone');
  }
  get detailSA() {
    return this.personelDetails.get('detailSA');
  }

  get secteur() {
    return this.personelDetails.get('secteur');
  }
  get typeUEA() {
    return this.personelDetails.get('typeUEA');
  }

  

  soumettre() {
   

    console.log('infos inscription', this.stagiaire);


    

    this.mesImage.img=[];
    let dataF = this.imageData;
    console.log(this.imageData);


    
 
    if (this.leFichierSelectionnee != null) {

      // --------------------- verifions  si fçichier selectionné n'est pas null afin de le stocker
      this.dataFichier.push(this.leFichierSelectionnee);
      this.dataFichierName.push(this.leNomDuFichierSelectionnee);
      console.log(this.dataFichier);
      console.log(this.dataFichierName);
  
      this.leFichierSelectionnee = null;

  
    } else {
      console.log("Veuillez selectionner un fichier");
    }

    let data = this.dataFichier;
    console.log(this.dataFichier);
    console.log(data);
    const formData = new FormData();
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
      formData.append("file", data[i], data[i].name);
      formData.forEach((values) => console.log(values));


    }

    setTimeout(()=>{

      //********************** Sauvegarde des fichiers dans un intervalle de temps******************************

      this.formService.uploadFile(formData).subscribe((response)=>{
        if(response.status == true){
        console.log("upload de fichier effectuez avec succès",response.data)



        this.stagiaire = {
          email: this.email?.value,
          username: this.username?.value,
          password: this.password?.value,
          roleName: 'ROLE_ADMIN',
          nom: this.name?.value,
          prenom: this.prenom?.value,
          adresse: this.adresse?.value,
          dateNaissance: this.dateNaissance?.value,
          genre: this.genre?.value,
          tel: this.tel?.value,
          typeUEA: parseInt(this.typeUEA?.value),
          detailSA: this.stepp,
          secteur: this.secteur?.value,
          photoPiece : response.data.toString()
        };
        console.log(this.stagiaire)
            // -------- enregistrement des informations du formulaire------------

        this.formService.saveForm(this.stagiaire).subscribe((value) => {
      console.log(value);

      if (value.status == true) {
        this.sweetAlert.showSuccessAlert(
          'Inscription réussi',
          'Connectez vous a votre boite email pour activer votre compte'
        );
        this.ngOnInit();
      } else {
        this.sweetAlert.showErrorAlert(
          'Inscription echouée',
          'veuillez verifier  les informations entrées'
        );
      }
       });
      }
      })
          //---------- Fin de l'enregistrement des informations du formulaire-----------

    
      //****************************Fin de la sauvegarde des fichiers************************************** 

    },300)




  }

  oneSubmit() {
    if (this.step == 2) {
      this.education_step = true;
      if (this.educationalDetails.invalid) {
        return;
      }
      alert('Well done!!');
    }
  }

  Oneprevious() {
    this.stepp--;

    if (this.stepp == 1) {
      this.payement_step = false;
    }
  }

  onNext() {
    if (this.stepp == 1) {
      this.persenal_step = true;
      if (this.personelDetails.invalid) {
        return;
      }
      this.stepp = 20;
    }
  }

  listDetaiSA() {
    this.formService.listAllDetailSA().subscribe((values) => {
      console.log(values);
      this.listDetailSA = values.data;

      if (this.listDetailSA == null) {
        //showInformation

        this.sweetAlert.showErrorAlert(
          'Liste des candidats vide',
          'Selectionnées des nouveaux candidats'
        );
      }
    });
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];

      const matchingControl = formGroup.controls[matchingControlName];

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  get personal() {
    return this.personalDetails.controls;
  }

  get address() {
    return this.addressDetails.controls;
  }

  get education() {
    return this.educationalDetails.controls;
  }
  next() {
    if (this.step == 1) {
      this.personal_step = true;
      if (this.personalDetails.invalid) {
        return;
      }
      this.step++;
    } else if (this.step == 2) {
      this.address_step = true;
      if (this.addressDetails.invalid) {
        return;
      }
      this.step++;
    }
  }

  previous() {
    this.step--;

    if (this.step == 1) {
      this.address_step = false;
    }
    if (this.step == 2) {
      this.education_step = false;
    }
  }

  submit() {
    if (this.step == 3) {
      this.education_step = true;
      if (this.educationalDetails.invalid) {
        return;
      }
      alert('Well done!!');
    }
  }

  setepChoix(choix: number) {
    this.stepp = choix;

    this.ngOnInit();
  }






//  merveil code 
onFileChange(event:any){
  this.leFichierSelectionnee = event.target.files[0];
  console.log("le fichier selectionné",this.leFichierSelectionnee);
  this.fichier1 = this.leFichierSelectionnee
  console.log("le premier fichier", this.fichier1)
  this.leNomDuFichierSelectionnee = event.target.files[0].name;
  console.log("nom du fichier selectionnee",  this.leNomDuFichierSelectionnee);


//------------------Gestion de l'affichage de l'image selectionnee ----------------------------------------

  this.message = '';
    this.preview = '';
    this.progress = 0;
    this.selectedFiles = event.target.files;


    console.log("iiiiiii",this.selectedFiles)

    this.imageData.push(this.selectedFiles);

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

     

      if (file) {
        this.preview = '';
        this.currentFile = file;

        const reader = new FileReader();

        reader.onload = (e: any) => {
         
          this.preview = e.target.result;
          this.mesImage.img.push(this.preview);

          localStorage.setItem('image', this.preview);
        };

        reader.readAsDataURL(this.currentFile);
      }
    }

//------------------Fin de la gestion de l'affichage de l'image selectionnee ----------------------------------------

}

uploadFiles(){
  if (this.leFichierSelectionnee != null) {
    this.dataFichier.push(this.leFichierSelectionnee);
    this.dataFichierName.push(this.leNomDuFichierSelectionnee);
    console.log(this.dataFichier);
    console.log(this.dataFichierName);

    this.leFichierSelectionnee = null;

  } else {
    console.log("Veuillez selectionner un fichier");
  }
}





}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

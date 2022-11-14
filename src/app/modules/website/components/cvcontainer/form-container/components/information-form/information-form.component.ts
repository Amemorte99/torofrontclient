import { ChangeDetectionStrategy, Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';
import { CvDataModel } from 'src/app/models/cv-data.models';
import { InformationsPersonnelleModel } from 'src/app/models/informations-personnelle.models';
import { AccountService } from '../../../account/account.service';

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrls: ['./information-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformationFormComponent implements OnInit, OnChanges {
  @Output() sendDataCv: EventEmitter<any> = new EventEmitter()


  @Output() toparentOutput: EventEmitter<any> = new EventEmitter();


  cvInformationPersnnelleData: InformationsPersonnelleModel = {
    photoUrl: "",
    photoUrl2: "./assets/images/cvimg/cv.jpg",
    prenom: "",
    nomfamille: "",
    mail: "",
    titreprofil: "",
    tel: "",
    adresse: "",
    codepostal: "",
    ville: '',

    dateNaissance: '',
    lieuNaissance:'',
    etatCivil:'',
    permisConduire:''
  };

  imagePickerConf: ImagePickerConf = {
    borderRadius: '4px',
    language: 'en',
    width: '400px',
    height: '140px',
    // width: '320px',
    // height: '240px',
  };
  constructor(private accountService : AccountService) { }


  ngOnInit(): void {
  }



  launchValueOne(e: any) {
    this.cvInformationPersnnelleData.prenom = e.target.value


      this.sendDataCv.emit(this.cvInformationPersnnelleData)
  }


  onImageChange(image: any) {
    this.cvInformationPersnnelleData.photoUrl = image
  }
  onImageChanged = (image: any) => {

    this.cvInformationPersnnelleData.photoUrl == image;

  };

  ngOnChanges(changes: any): void {
    console.log("cocou")
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
      this.sendDataCv.emit(this.cvInformationPersnnelleData)
  }

  public deposit(): void{
    this.amount +=100;
  }

  public get amount(): number{
    return this.accountService.amount;
  }
  public set amount(valuee : number){
    this.accountService.amount =valuee;
  }

  launchValue() {
    this.toparentOutput.emit(this.cvInformationPersnnelleData)
  }
}

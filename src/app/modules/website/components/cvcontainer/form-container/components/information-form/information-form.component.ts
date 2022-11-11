import { ChangeDetectionStrategy, Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrls: ['./information-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformationFormComponent implements OnInit, OnChanges {
  @Output() sendDataCv: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  launchValue() {}

  launchValueOne(e: any) {
    this.cv.prenom = e.target.value


      this.sendDataCv.emit(this.cv)
  }

  cv: any = {
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

  onImageChange(image: any) {
    this.cv.photoUrl = image
  }
  onImageChanged = (image: any) => {

    this.cv.photoUrl == image;

  };

  ngOnChanges(changes: any): void {
    console.log("cocou")
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
      this.sendDataCv.emit(this.cv)
  }

}

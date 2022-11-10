import { Component, OnInit } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrls: ['./information-form.component.css']
})
export class InformationFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  launchValue() {

  }

  cv = {
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

}

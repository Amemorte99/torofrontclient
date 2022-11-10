import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagePickerConf } from 'ngp-image-picker';

@Component({
  selector: 'app-redaction',
  templateUrl: './redaction.component.html',
  styleUrls: ['./redaction.component.css']
})
export class RedactionComponent implements OnInit {
  imagePickerConf: ImagePickerConf = {
    borderRadius: '4px',
    language: 'en',
    width: '99px',
    height: '88px',
    // width: '320px',
    // height: '240px',
  };
cv ={
  photoUrl : "",
  // photoUrl : "./assets/images/cvimg/cv.jpg",
  prenom: "",
  nomfamille :"",
  mail:"",
  titreprofil:"",
  tel:"",
  adresse:"",
  codepostal:"",
  ville:"",


} ;
  constructor(
    public router : Router
  ) { }

  ngOnInit(): void {
  }
  save (cv : any){

  }
  onImageChange(image: any){
    // image= this.cv.photoUrl
  }
  onImageChanged = (image: any) => {
   
      this.cv.photoUrl == image ;
   
  };
}

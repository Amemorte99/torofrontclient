import { Component, OnInit } from '@angular/core';
import { UeaService } from 'src/app/modules/uea/common/uea.service';
import { AuthService } from 'src/app/modules/website/components/auth/common/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {


  ueaConnecte:any;
  isAuthenticateUea!:number;

  authentifier!:number;

  imageProfil:any;


  
  constructor(
    private authService: AuthService,
    private ueaService: UeaService
    
  ) { }
  ngOnInit(): void {

    
    this.ueaConnecte = JSON.parse(localStorage.getItem('ueaInfo')!);

    this.isAuthenticateUea=JSON.parse(localStorage.getItem('isAuthenticate')!);
    

    
    this.getPhoto(this.ueaConnecte.photoPiece);

  }
  public isCollapsed = false;


  logout() {
    this.authService.logout();
    this.ngOnInit();
  }


  getPhoto(photo :string){
    this.ueaService.getPhotoprofil(photo).subscribe((value)=>{


      console.log("mannn valu",value)
      //this.imageProfil=value;
      const reader = new FileReader();
        reader.readAsDataURL(value);
        reader.onloadend = () => {
          this.imageProfil = reader.result;
        }
    }

    )
  }



  

}




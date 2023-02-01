import { Component, OnInit } from '@angular/core';
import { UeaService } from 'src/app/modules/uea/common/uea.service';
import { AuthService } from 'src/app/modules/website/components/auth/common/auth.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  ueaConnecte:any;
  imageProfil:any;

  constructor(
    private authService: AuthService,
    private ueaService: UeaService) {}

  ngOnInit(): void {

    

    this.ueaConnecte=JSON.parse(localStorage.getItem("ueaInfo")!);

    this.getPhoto(this.ueaConnecte.photoPiece);
  }

  logout() {
    this.authService.logout();
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

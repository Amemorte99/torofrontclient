import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { first, map, Observable } from 'rxjs';
import { HttpService } from 'src/app/common/http.service';
import { HistoriqueUEAService } from 'src/app/modules/uea/common/historique-uea.service';
import { SweetAlertService } from 'src/app/shared/common/sweet-alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  infoUEA:any;
  ueaConnecte:any;

  isAuthenticate = false;
 /*  private headers = new Headers({
    "Content-Type": "application/x-www-form-urlencoded",
  }); */
  private headers = new Headers({
    "Content-Type": "application/json",
  });

  constructor(
    private httpService: HttpService,
    private route: Router,
    private sweetAlertService: SweetAlertService,
    private router: Router,
    private histoService:HistoriqueUEAService
  ) { }




  login(username: string, password: string): Observable<any> {
    //const body = `&username=${username}&password=${password}`;
    let body={
      "username":username,
      "password":password
  }
    return this.httpService
      .postRequest("/api/auth/login", body, this.headers)
      .pipe(
        first(),
        map((value) => {
          console.log("mee",value)
          if(value.status==true){
            const token =  value.data.token;
            localStorage.setItem("ueaInfo", JSON.stringify(value.data.data));


            this.ueaConnecte = JSON.parse(localStorage.getItem('ueaInfo')!);
            

            
            localStorage.setItem("token", `Bearer ${token}`);
            if (token) {
              // this.bnIdle.startWatching(300).subscribe(timeOut => {
              //   if(timeOut){
              //     // this.logout()
              //     localStorage.removeItem('isAuthenticate')
              //     this.router.navigate(["/auth/login"])

              //     this.sweetAlertService.showInformation(
              //       "Déconnexion",
              //       "Déconnexion après une période d'inactivité"
              //     );
              //   }
              // })
              
              localStorage.setItem("isAuthenticate", "1");
              //this.route.navigate(["/admin/dashboard"]);



              this.sweetAlertService.showSuccessAlert(
                "Authentification réussie.",
                "Appuyez pour acceder avotre compte"
              );
              this.save(this.ueaConnecte.id);

              this.route.navigate(["/utd/dashboard/"]);

            }

          }else{
            this.sweetAlertService.showErrorAlert(
              "Authentification échouée.",
              "Mot de passe ou nom d'utilisateur icorrecte"
            );
          }

        })
      );
  }

  loginFull(username: string, password: string): Observable<any> {
    const body = `&username=${username}&password=${password}`;
    console.log(body);
    return this.httpService
      .postRequest("/api/auth/login", body, this.headers)
      .pipe(
        first(),
        map((value) => {
          const token = value.accessToken;
          localStorage.setItem("token", `Bearer ${token}`);
        })
      );
  }


  logout() {
    localStorage.clear();
    this.route.navigate([""], {
      queryParams: {},
    });
    this.sweetAlertService.showSuccessAlert(
      "deconnexion réussie.",
      "Connectez vous pour acceder à avotre compte"
    );
    
  }

  save(e:any){
    

    let bodyData: any = {
      uea:{
        id:parseInt(e)
      }
    }


  
    this.histoService.saveHisto(bodyData).subscribe((dataValue) => {

    })


  
  }

}

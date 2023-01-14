import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { first, map, Observable } from 'rxjs';
import { HttpService } from 'src/app/common/http.service';
import { SweetAlertService } from 'src/app/shared/common/sweet-alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  infoUEA:any;

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
    private router: Router
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
                "authentification réussie.",
                "Appuyez pour acceder avotre compte"
              );

              this.route.navigate(["/utd/dashboard/"]);

            }

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
  }

}

import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SweetAlertService } from '../shared/sweet-alert.service';

const API_USERS_URL = `${environment.apiUrl}`;
const BIOMETRIE_URL = "http://localhost:8006/api/start_session";
const SERVER_URL = "http://192.168.17.247:3001/all/reverse/hash";
const OTHER_URL = "http://192.168.17.247:3001/all/decrypt";
const CINETPAY_URL = "https://client.cinetpay.com/v1/auth/login";
const CINETPAY_DEC =
  "https://client.cinetpay.com/v1/transfer/money/send/contact";

@Injectable({
  providedIn: 'root'
})
export class ConfigInterceptor implements HttpInterceptor {
  loginUrl = `${API_USERS_URL}SECURITY-SERVICE/login`;

  constructor(private sweetAlertService: SweetAlertService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url === this.loginUrl || request.url === CINETPAY_URL) {
      request = request.clone({
        headers: request.headers.set(
          "Content-Type",
          "application/x-www-form-urlencoded"
        ),
      });
      request = request.clone({
        headers: request.headers.set(
          "Accept",
          "application/x-www-form-urlencoded"
        ),
      });
    } else if (
      request.url === BIOMETRIE_URL ||
      request.url === SERVER_URL ||
      request.url === OTHER_URL ||
      request.url === "https://api-checkout.cinetpay.com/v2/payment"
    ) {
      request = request.clone({
        headers: request.headers.set("Access-Control-Allow-Origin", "*"),
      });
    } else if (request.url.includes("AVR-SERVICE/api/avrs/detailAgr")) {
      if (localStorage.getItem("token")) {
        request = request.clone({
          headers: request.headers.set(
            "Authorization",
            `${localStorage.getItem("token")}`
          ),
        });
      }
    } 
    else if (request.url.includes(CINETPAY_DEC) || request.url.includes(`https://client.cinetpay.com/v1/transfer/contact`)) {
      request = request.clone({
        headers: request.headers.set(
          "Content-Type",
          "application/x-www-form-urlencoded"
        ),
      });
      request = request.clone({
        headers: request.headers.set(
          "Accept",
          "application/x-www-form-urlencoded"
        ),
      });
      // if (localStorage.getItem("tokenCinet")) {
      //   request = request.clone({
      //     headers: request.headers.set(
      //       "Authorization",
      //       `${localStorage.getItem("token")}`
      //     ),
      //   });
      // }
    } 
    //  else if (request.url.includes('api/postuler/enregistrer')) {
    //   console.log('file')
    //   request = request.clone({
      //   setHeaders : {
      //   'content-Type':'application/json ; charset=utf-8',
      //   'Accept':'application/json',
     // 'Authorization' : token
      // },
     // $httpProvider.defaults.headers.post['Content-Type'] = 'multipart/form-data; charset=utf-8';

    //     headers: request.headers.set("Content-Type", "multipart/form-data"),
      
     // });
      // request = request.clone({
      //   headers: request.headers.set("Accept", "application/json"),
      // });
      // if (localStorage.getItem("token")) {
      //     request = request.clone({
      //       headers: request.headers.set(
      //         "Authorization",
      //         `${localStorage.getItem("token")}`
      //       ),
      //     });
      //   }
  //  }
    else {
      
      // alert("fflk");
      request = request.clone({
        headers: request.headers.set("Content-Type", "application/json"),
      });
      request = request.clone({
        headers: request.headers.set("Accept", "application/json"),
      });
      // request = request.clone({
      //   headers: request.headers.set("Access-Control-Allow-Origin", "*"),
      // });

      if (localStorage.getItem("token")) {
        request = request.clone({
          headers: request.headers.set(
            "Authorization",
            `${localStorage.getItem("token")}`
          ),
        });
      }
    }

    if (request.body instanceof File) {
      return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log("event ---->>", event);
          }
          return event;
        }),

        catchError((error: HttpErrorResponse) => {
          let data = {};

          data = {
            reason:
              (error && error.error ? error.error : "") +
              " - " +
              (error && error.message ? error.message : ""),
            status: error.status,
          };

          console.log("data: ", data);
          return throwError(() => error);
        })
      );
    }
    // return next.handle(request);
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log("event ---->>", event);
        }
        return event;
      }),

      catchError((error: HttpErrorResponse) => {
        let data = {};

        data = {
          reason:
            (error && error.error ? error.error : "") +
            " - " +
            (error && error.message ? error.message : ""),
          status: error.status,
        };
        if(error.status==500){
          this.sweetAlertService.showErrorAlert("Warning !", "une erreur s'est produite , nous vous reviendrons plus tard ")
        }

        console.log("data: ", data);
        return throwError(() => error);
      })
    );
  }
}


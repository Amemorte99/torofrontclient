import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SweetAlertService } from '../shared/common/sweet-alert.service';

const API_USERS_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root',
})
export class ConfigInterceptor implements HttpInterceptor {
 // loginUrl = `${API_USERS_URL}SECURITY-SERVICE/login`;

  constructor(private sweetAlertService: SweetAlertService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // alert("fflk");
    
    // request = request.clone({
    //   headers: request.headers.set("Access-Control-Allow-Origin", "*"),
    // });

  

   if (request.url.includes('/api/uploads/saveFile')) {
      console.log("config interceptor : vous enregistrer un fichier",'file')
      // request = request.clone({
      //   headers: request.headers.set(
      //     "Content-Type",
      //     "multipart/form-data"
      //   ),
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
    else {
      request = request.clone({
        headers: request.headers.set("Access-Control-Allow-Origin", "*"),
      });
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
      request = request.clone({
        headers: request.headers.set('Accept', 'application/json'),
      });
      request = request.clone({
        headers: request.headers.set("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS"),
      });

       //commenter par fanuel
      if (localStorage.getItem('token')) {
        request = request.clone({
         headers: request.headers.set(
          'Authorization',
           `${localStorage.getItem('token')}`
          ),
        });
      }
    }
   

  

    if (request.body instanceof File) {
      return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('event ---->>', event);
          }
          return event;
        }),

        catchError((error: HttpErrorResponse) => {
          let data = {};

          data = {
            reason:
              (error && error.error ? error.error : '') +
              ' - ' +
              (error && error.message ? error.message : ''),
            status: error.status,
          };

          console.log('data: ', data);
          return throwError(() => error);
        })
      );
    }
    // return next.handle(request);
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event ---->>', event);
        }
        return event;
      }),

      catchError((error: HttpErrorResponse) => {
        let data = {};

        data = {
          reason:
            (error && error.error ? error.error : '') +
            ' - ' +
            (error && error.message ? error.message : ''),
          status: error.status,
        };
        if (error.status == 500) {
         
          console.log("erreur serveur")
        }

        console.log('data: ', data);
        return throwError(() => error);
      })
    );
  }
}

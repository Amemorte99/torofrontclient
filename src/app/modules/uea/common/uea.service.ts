import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/common/http.service';
import { FormationModel } from 'src/app/models/formation-model.model';

@Injectable({
  providedIn: 'root'
})
export class UeaService {

  
  constructor(private httpService: HttpService) { }


  countUEA() : Observable<any> {
    return this.httpService.getRequest(
      `/api/uea/count`,
    );
  }

 

  countUEAAdmin() : Observable<any> {
    return this.httpService.getRequest(
      `/api/uea/countA`,
    );
  }

  listUea() : Observable<any> {
    return this.httpService.getRequest(
      `/api/uea/list`,
    );
  }
  getById(idUEA:number) : Observable<any> {
    return this.httpService.getRequest(
      `/api/uea/getById/`+idUEA
    );
  }

  getPhotoprofil(nameFile:string) : Observable<any> {
    return this.httpService.getRequest(
      `/api/uploads/file/`+nameFile,{ responseType: 'blob' }
    );
  }

  getfil(nameFile:string) : Observable<any> {
    return this.httpService.getRequest(
      `/api/uploads/file/`+nameFile, { responseType: 'arraybuffer' }
    
    );
  }


  resetPassord(speudo: string,data: any)  {
    return this.httpService.putRequest(
      `/api/auth/reset/${speudo}`,data
    );
  }
 
  
}

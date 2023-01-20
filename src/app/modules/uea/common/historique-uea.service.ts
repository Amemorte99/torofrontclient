import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/common/http.service';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueUEAService {
  constructor(private httpService: HttpService) { }


  saveHisto(data:any): Observable<any> {
    return this.httpService.postRequest(
      `/api/histo/save`,data
    );
  }
  list(): Observable<any> {
    return this.httpService.getRequest(
      `/api/histo/list`
    );
  }

  getByIdUEA(idUEA:number): Observable<any> {
    return this.httpService.getRequest(
      `/api/histo/byIdUea/`+idUEA
    );
  }

  getById(idUEA:number): Observable<any> {
    return this.httpService.getRequest(
      `/api/histo/getByid/`+idUEA
    );
  }
  
}

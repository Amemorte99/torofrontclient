import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/common/http.service';

@Injectable({
  providedIn: 'root'
})
export class AppelOffreService {

  
  constructor(private httpService: HttpService) { }


  addAppelOffre(data:any): Observable<any> {
    return this.httpService.postRequest(
      `/api/appelCandidature/register`,data
    );
  }

  ListAppelCandidatureByIdUEA(idDataUEA : number): Observable<any> {
    return this.httpService.getRequest(
      `/api/appelCandidature/byIdUea/`+idDataUEA
    );
  }
  getById(idapp : number): Observable<any> {
    return this.httpService.getRequest(
      `/api/appelCandidature/getBYid/`+idapp
    );
  }
  getByTypeOffre(): Observable<any> {
    return this.httpService.getRequest(
      `/api/appelCandidature/typeOffre`
    );
  }

  listAppel(): Observable<any> {
    return this.httpService.getRequest(
      `/api/appelCandidature/list`
    );
  }
  listTypeJob(): Observable<any> {
    return this.httpService.getRequest(
      `/api/jobtype/list`
    );
  }

  
}

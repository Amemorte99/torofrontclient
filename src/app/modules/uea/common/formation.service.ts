import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/common/http.service';
import { FormationModel } from 'src/app/models/formation-model.model';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private httpService: HttpService) { }


  


  ListFormation(): Observable<FormationModel> {
    return this.httpService.getRequest(
      `/api/formation/list`,
    );
  }
}

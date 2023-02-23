import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/common/http.service';

@Injectable({
  providedIn: 'root'
})
export class ChargerOffreService {

  constructor(private httpService: HttpService) { }

 

  chargerAppelOffre(idUea:number,appel:number): Observable<any> {
    return this.httpService.getRequest(
      `/api/chargement/charger/${idUea}/${appel}`
    );
  }

  listChargerAppelOffreByIdUea(idUea:number): Observable<any> {
    return this.httpService.getRequest(
      `/api/chargement/listByidUea/${idUea}`
    );
  }
}

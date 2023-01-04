import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/common/http.service';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService {

  constructor(private httpService: HttpService) { }


  
  saveForm(dataForm: any) {
    return this.httpService.postRequest(
      `/api/auth/register`,
      dataForm
    );
  }

  listAllDetailSA() {
    return this.httpService.getRequest("/api/detailsa/list");
  }



























  saveExtrant(dataSupport: any) {
    return this.httpService.postRequest(
      `AVR-SERVICE/api/extrants/add/supportv2`,
      dataSupport
    );
  }



  getListIntrantByReceveur(idRecepteur: number) {
    return this.httpService.getRequest(
      "AVR-SERVICE/api/intrants/list/by/posteReceveur/" + idRecepteur
    );
  }



  updateKsuReference(id: number, data: any) {
    return this.httpService.putRequest(
      `KSU-SERVICE/api/ksus/updateKsuReference/${id}`,
      data
    );
  }

  updatePassifPresentielle(idBon: number, data: any) {
    return this.httpService.putRequest(
      `TE-SERVICE/api/passifPresentielle/edit/${idBon}`,
      data
    );
  }

  sendBon(data: any) {
    return this.httpService.postRequest(
      `/AVR-SERVICE/api/avrs/createSupportMarchandAvrv3`,
      data
    );
  }

  CandidatByIdCode(idCode: number) {
    return this.httpService.postRequest(
      "FORMATION-SERVICE/api/codes/updateCode/idCode/" + idCode,
      {}
    );
  }

  generateCodePouvoirFaire(body: any) {
    return this.httpService.postRequest(
      `FRANCHISE-SERVICE/api/monitor/franchise-masterv2`,
      body
    );
  }
  getFormationByIdDetailsAgrFranchise(idFranchise: number) {
    return this.httpService.getRequest(
      "FORMATION-SERVICE/api/salles/getFormationBy/idDetailsAgrFranchise/"+
      idFranchise
    );
  }

}

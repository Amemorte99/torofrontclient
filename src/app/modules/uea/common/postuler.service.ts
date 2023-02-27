import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/common/http.service';

@Injectable({
  providedIn: 'root'
})
export class PostulerService {


  constructor(private httpService: HttpService) { }  


  createPostuler(data:any): Observable<any> {
    return this.httpService.postRequest(
      `/api/postuler/save`,data
    );
  }
}

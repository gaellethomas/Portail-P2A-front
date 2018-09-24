import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Access } from 'src/app/interfaces/access';
import { Observable } from 'rxjs';
import { AccessType } from 'src/app/interfaces/access-type';

@Injectable({
  providedIn: 'root'
})
export class AccessService {
  API_URL_RECETTE = environment.urlBack + '/access';

  constructor(private http: HttpClient) { }

  getAllByAccessType(accessType: AccessType): Observable<Access[]> {
    return this.http.get<Access[]> (this.API_URL_RECETTE + '/' + accessType);
  }

}

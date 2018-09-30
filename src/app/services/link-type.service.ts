import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LinkType } from 'src/app/interfaces/link-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkTypeService {

  API_URL_LINKTYPE = environment.urlBack + '/linkType';

  constructor(private http: HttpClient) { }

  getAll(): Observable<LinkType[]> {
    return this.http.get<LinkType[]>(this.API_URL_LINKTYPE);
  }

  getByActivity(activityId: number): Observable<LinkType[]> {
    return this.http.get<LinkType[]>(this.API_URL_LINKTYPE + '/?activityId=' + activityId);
  }
}

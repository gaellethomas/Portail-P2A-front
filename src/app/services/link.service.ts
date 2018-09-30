import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Link } from 'src/app/interfaces/link';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  API_URL_LINK = environment.urlBack + '/link';

  constructor(private http: HttpClient) { }

  getListByLinkTypeIdAndActivityId(linkTypeId: number, activityId: number): Observable<Link[]> {
    return this.http.get<Link[]> (this.API_URL_LINK + '/?typeLinkId=' + linkTypeId + '&activityId=' + activityId);
  }

}

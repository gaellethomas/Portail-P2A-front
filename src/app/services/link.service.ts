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

  getAll(): Observable<Link[]> {
    return this.http.get<Link[]>(this.API_URL_LINK);
  }

  getListByLinkTypeIdAndActivityId(linkTypeId: number, activityId: number): Observable<Link[]> {
    return this.http.get<Link[]>(this.API_URL_LINK + '/?linkTypeId=' + linkTypeId + '&activityId=' + activityId);
  }

  getListLinkSearched(titleSearchedPatern: string, linkTypeId: number, activityId: number): Observable<Link[]> {

    // construct the url with its optional parameters
    const url = this.API_URL_LINK +
      // put ? if we have at least one parameter
      (titleSearchedPatern.length > 0 || linkTypeId !== 0 || activityId !== 0 ? '/?' : '') +
      // put the titleSearchedPatern if its length is > 0
      (titleSearchedPatern.length > 0 ? 'titleSearchedPatern=' + titleSearchedPatern : '') +
      // put the & if there is a parameter before and after
      ((titleSearchedPatern.length > 0) && ((linkTypeId !== 0) || (activityId !== 0)) ? '&' : '') +
      // put the linkTypeId if it is not equal 0
      (linkTypeId !== 0 ? 'linkTypeId=' + linkTypeId : '') +
      // put the & if there is a parameter before and after
      ((titleSearchedPatern.length > 0 || linkTypeId !== 0) && (activityId !== 0) ? '&' : '') +
      // put the activityId if it is not equal 0
      (activityId !== 0 ? 'activityId=' + activityId : '');

    return this.http.get<Link[]>(url);
  }
}

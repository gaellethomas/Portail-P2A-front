import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../interfaces/person';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  API_URL_PERSON = environment.urlBack + '/person';
  constructor(private http: HttpClient) {
  }

  getListByP2aAndActivityId(belongP2a: boolean, activityId: number): Observable<Person[]> {
    return this.http.get<Person[]>(this.API_URL_PERSON + '?belongP2a=' + belongP2a + '&activityId=' + activityId);
  }

  // tslint:disable-next-line:max-line-length
  getListPersonSearch(namePersonEntered: string, firstNameEntered: string, uidEntered: string, activityIdPersonSelected: number): Observable<Person[]> {

    // construct the url with its optional parameters
    const url = this.API_URL_PERSON +
      // put ? if we have at least one parameter
      (namePersonEntered.length > 0 || firstNameEntered.length > 0 || uidEntered.length || activityIdPersonSelected !== 0
        ? '/?' : '') +
      // put the namePersonEntered if its length is > 0
      (namePersonEntered.length > 0 ? 'nameEntered=' + namePersonEntered : '') +
      // put the & if there is a parameter before and after
      ((namePersonEntered.length > 0) && ((firstNameEntered.length > 0)
      || (uidEntered.length > 0) || (activityIdPersonSelected !== 0)) ? '&' : '') +
      // put the firstNameEntered if it is not equal 0
      (firstNameEntered.length > 0 ? 'firstNameEntered=' + firstNameEntered : '') +
      // put the & if there is a parameter before and after
      ((namePersonEntered.length > 0 || firstNameEntered.length > 0)
      && ((uidEntered.length > 0) || (activityIdPersonSelected !== 0)) ? '&' : '') +
      // put the uidEntered if it is not equal 0
      (uidEntered.length > 0 ? 'uidEntered=' + uidEntered : '') +
      // put the & if there is a parameter before and after
      ((namePersonEntered.length > 0 || firstNameEntered.length > 0 || uidEntered.length > 0)
      && (activityIdPersonSelected !== 0) ? '&' : '') +
      // put the activityIdPersonSelected if it is not equal 0
      (activityIdPersonSelected !== 0 ? 'activityId=' + activityIdPersonSelected : '');
        console.log('url', url);
    return this.http.get<Person[]>(url);
  }
}

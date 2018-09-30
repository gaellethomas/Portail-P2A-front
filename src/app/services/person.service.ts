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
    return this.http.get<Person[]> (this.API_URL_PERSON + '?belongP2a=' + belongP2a + '&activityId=' + activityId);
  }

}

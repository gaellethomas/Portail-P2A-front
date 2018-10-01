import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/interfaces/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  API_URL_LINK = environment.urlBack + '/activity';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.API_URL_LINK);
  }
}

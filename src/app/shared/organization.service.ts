import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { AppSettings } from '../app.settings';
import { Organization } from '../_models/models';

export const BASE_PATH = '/organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(
    private http: Http
  ) { 

  }

  fetch() : Observable<Organization[]> {
    return this.http.get(AppSettings.apiEndpoint(BASE_PATH + '/'))
    .pipe(
        map(
          (response: Response) => {
            const orgs : Organization[] = response.json();
            return orgs;
          }
        )
    );
  }

  save(org: Organization) : Observable<Organization> {
    return this.http.post(AppSettings.apiEndpoint(BASE_PATH + '/add'), org)
    .pipe(
      map(
        (response: Response) => {
          const org: Organization = response.json();
          return org;
        }
      )
    );
  }

  update(org: Organization) : Observable<Organization> {
    return this.http.post(AppSettings.apiEndpoint(BASE_PATH + '/update'), org)
    .pipe(
      map(
        (response: Response) => {
          const org: Organization = response.json();
          return org;
        }
      )
    );
  }

  delete(org: Organization) : Observable<Organization> {
    return this.http.post(AppSettings.apiEndpoint(BASE_PATH + '/delete'), org)
    .pipe(
      map(
        (response: Response) => {
          const org: Organization = response.json();
          return org;
        }
      )
    );
  }
}

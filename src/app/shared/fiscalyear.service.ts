import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { AppSettings } from '../app.settings';
import { FiscalYear } from '../_models/models';

export const BASE_PATH = '/fiscalyear';

@Injectable({
  providedIn: 'root'
})
export class FiscalyearService {

  constructor(private http: Http) { }

  fetch() : Observable<FiscalYear[]> {
    return this.http.get(AppSettings.apiEndpoint(BASE_PATH + '/'))
    .pipe(
        map(
          (response: Response) => {
            const fys : FiscalYear[] = response.json();
            return fys;
          }
        )
    );
  }

  save(fy: FiscalYear) : Observable<FiscalYear> {
    return this.http.post(AppSettings.apiEndpoint(BASE_PATH + '/add'), fy)
    .pipe(
      map(
        (response: Response) => {
          const fy: FiscalYear = response.json();
          return fy;
        }
      )
    );
  }

  update(fy: FiscalYear) : Observable<FiscalYear> {
    return this.http.post(AppSettings.apiEndpoint(BASE_PATH + '/update'), fy)
    .pipe(
      map(
        (response: Response) => {
          const fy: FiscalYear = response.json();
          return fy;
        }
      )
    );
  }

  delete(fy: FiscalYear) : Observable<FiscalYear> {
    return this.http.post(AppSettings.apiEndpoint(BASE_PATH + '/delete'), fy)
    .pipe(
      map(
        (response: Response) => {
          const fy: FiscalYear = response.json();
          return fy;
        }
      )
    );
  }
}

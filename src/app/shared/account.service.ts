import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { AppSettings } from '../app.settings';
import { Account } from '../_models/models';

export const BASE_PATH = '/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: Http
  ) { }

  fetch() : Observable<Account[]> {
    return this.http.get(AppSettings.apiEndpoint(BASE_PATH + '/'))
    .pipe(
        map(
          (response: Response) => {
            const accts : Account[] = response.json();
            return accts;
          }
        )
    );
  }

  save(acct: Account) : Observable<Account> {
    return this.http.post(AppSettings.apiEndpoint(BASE_PATH + '/add'), acct)
    .pipe(
      map(
        (response: Response) => {
          const acct: Account = response.json();
          return acct;
        }
      )
    );
  }

  update(acct: Account) : Observable<Account> {
    return this.http.post(AppSettings.apiEndpoint(BASE_PATH + '/update'), acct)
    .pipe(
      map(
        (response: Response) => {
          const acct: Account = response.json();
          return acct;
        }
      )
    );
  }

  delete(acct: Account) : Observable<Account> {
    return this.http.post(AppSettings.apiEndpoint(BASE_PATH + '/delete'), acct)
    .pipe(
      map(
        (response: Response) => {
          const acct: Account = response.json();
          return acct;
        }
      )
    );
  }

}

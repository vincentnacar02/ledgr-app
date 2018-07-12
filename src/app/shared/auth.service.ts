import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { AppSettings } from '../app.settings';
import { User } from '../_models/models';

export const BASE_PATH = '/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  getUser(emailAddress: string) : Observable<User> {
    return this.http.get(AppSettings.apiEndpoint(BASE_PATH + '/' + emailAddress))
    .pipe(
        map(
          (response: Response) => {
            const user : User = response.json();
            return user;
          }
        )
    );
  }

  saveOrUpdate(user: User) : Observable<User> {
    return this.http.post(AppSettings.apiEndpoint(BASE_PATH + '/save'), user)
    .pipe(
      map(
        (response: Response) => {
          const user: User = response.json();
          return user;
        }
      )
    );
  }

}

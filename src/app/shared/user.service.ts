import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { AppSettings } from '../app.settings';
import { User } from '../_models/models';

export const BASE_PATH = '/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: Http
  ) { }

  fetch() : Observable<User[]> {
    return this.http.get(AppSettings.apiEndpoint(BASE_PATH + '/'))
    .pipe(
        map(
          (response: Response) => {
            const users : User[] = response.json();
            return users;
          }
        )
    );
  }

}

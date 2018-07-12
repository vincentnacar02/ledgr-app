import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { AppSettings } from '../app.settings';
import { DocumentRegister } from '../_models/models';

export const BASE_PATH = '/document-register';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(
    private http: Http
  ) { }

  fetch() : Observable<DocumentRegister[]> {
    return this.http.get(AppSettings.apiEndpoint(BASE_PATH + '/'))
    .pipe(
        map(
          (response: Response) => {
            const docs : DocumentRegister[] = response.json();
            return docs;
          }
        )
    );
  }

  save(doc: DocumentRegister) : Observable<DocumentRegister> {
    return this.http.post(AppSettings.apiEndpoint(BASE_PATH + '/add'), doc)
    .pipe(
      map(
        (response: Response) => {
          const doc: DocumentRegister = response.json();
          return doc;
        }
      )
    );
  }

  update(doc: DocumentRegister) : Observable<DocumentRegister> {
    return this.http.post(AppSettings.apiEndpoint(BASE_PATH + '/update'), doc)
    .pipe(
      map(
        (response: Response) => {
          const doc: DocumentRegister = response.json();
          return doc;
        }
      )
    );
  }

  delete(doc: DocumentRegister) : Observable<DocumentRegister> {
    return this.http.post(AppSettings.apiEndpoint(BASE_PATH + '/delete'), doc)
    .pipe(
      map(
        (response: Response) => {
          const doc: DocumentRegister = response.json();
          return doc;
        }
      )
    );
  }

}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { Transaction, TransactionHeader, TransactionLine } from '../_models/models';
import { AppSettings } from '../app.settings';

export const BASE_PATH = '/transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transactions$: Observable<Transaction[]>;
  transaction$: Observable<Transaction>;

  constructor(
    private http: Http
  ) { }

  select(transaction: Transaction) {
    this.transaction$ = of(transaction);
  }

  fetchAll() : Observable<Transaction[]> {
    return this.http.get(AppSettings.apiEndpoint(BASE_PATH + '/'))
    .pipe(
        map(
          (response: Response) => {
            const transactions : Transaction[] = response.json();
            return transactions;
          }
        )
    );
  }

  save(transaction: Transaction) : Observable<Transaction> {
    return this.http.post(AppSettings.apiEndpoint(BASE_PATH + '/save'), transaction)
    .pipe(
      map(
        (response: Response) => {
          const transaction: Transaction = response.json();
          return transaction;
        }
      )
    );
  }

  current() : Observable<Transaction> {
    return this.transaction$;
  }

  create() {
    let transactionHeader: TransactionHeader = new TransactionHeader();
    transactionHeader.TotalDebit = 0;
    transactionHeader.TotalCredit = 0;
    let transactionLines: TransactionLine[] = new Array<TransactionLine>();
    this.transaction$ = of(new Transaction(transactionHeader, transactionLines));
  }

  saveTransaction(transaction: Transaction) {

  }

  postTransaction(transaction: Transaction) {

  }

}

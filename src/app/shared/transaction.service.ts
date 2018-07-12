import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Transaction, TransactionHeader, TransactionLine } from '../_models/models';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transaction$: Observable<Transaction>;

  constructor() { }

  select(transactionID: number) {

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

}

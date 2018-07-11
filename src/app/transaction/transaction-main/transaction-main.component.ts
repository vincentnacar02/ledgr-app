import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction, TransactionHeader, TransactionLine } from '../../_models/models';
import { TransactionService } from '../../shared/transaction.service';

@Component({
  selector: 'app-transaction-main',
  templateUrl: './transaction-main.component.html',
  styleUrls: ['./transaction-main.component.css']
})
export class TransactionMainComponent implements OnInit {

  transaction: Transaction;
  transactionHeader: TransactionHeader;
  transactionLines: TransactionLine[];
  transaction$: Observable<Transaction>;

  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.transactionService.create();
    this.transaction$ = this.transactionService.current();
    this.transaction$.subscribe(data => {
      this.transaction = data;
      this.transactionHeader = this.transaction.Header;
      this.transactionLines = this.transaction.Lines;
    });
  }

  addItem() {
    this.transactionLines.push(new TransactionLine());
  }

  save() {
    console.log(this.transaction);
  }

  deleteLine(line: TransactionLine) {
    console.log(line);
    const i = this.transactionLines.indexOf(line);
    console.log(i);
    this.transactionLines.splice(i, 1);
  }

}

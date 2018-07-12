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
    const line = new TransactionLine();
    line.CreditAmount = 0;
    line.DebitAmount = 0;
    this.transactionLines.push(line);
  }

  recomputeTotal() {
    if (this.transactionLines) {
      let totalDebit : number = 0;
      let totalCredit : number = 0;
      this.transactionLines.forEach(line => {
        totalDebit += line.DebitAmount;
        totalCredit += line.CreditAmount;
      });
      this.transactionHeader.TotalDebit = totalDebit;
      this.transactionHeader.TotalCredit = totalCredit;
    }
  }

  save() {
    console.log(this.transaction);
  }

  deleteLine(line: TransactionLine) {
    console.log(line);
    const i = this.transactionLines.indexOf(line);
    console.log(i);
    this.transactionLines.splice(i, 1);
    this.recomputeTotal();
  }

}

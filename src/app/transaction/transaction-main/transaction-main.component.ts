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

  transactions$: Observable<Transaction[]>;

  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.createNew();
    this.refreshList();
  }

  createNew() {
    this.transactionService.create();
    this.refreshSelected();
  }

  select(tran: Transaction) {
    this.transactionService.select(tran);
    this.refreshSelected();
  }

  refreshSelected() {
    this.transaction$ = this.transactionService.current();
    this.transaction$.subscribe(data => {
      this.transaction = data;
      this.transactionHeader = this.transaction.Header;
      this.transactionLines = this.transaction.Lines;
    });
  }

  refreshList() {
    this.transactions$ = this.transactionService.fetchAll();
    this.transactions$.subscribe(data => {
      console.log(data);
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

  save(post: boolean) {
    this.transaction.Header.IsPosted = post;
    console.log(this.transaction);
    this.transactionService.save(this.transaction).subscribe(data => {
      if (data) {
        this.createNew();
        this.refreshList();
      }
    }, error => {
      console.log(error);
    })
  }

  deleteLine(line: TransactionLine) {
    console.log(line);
    const i = this.transactionLines.indexOf(line);
    console.log(i);
    this.transactionLines.splice(i, 1);
    this.recomputeTotal();
  }

}

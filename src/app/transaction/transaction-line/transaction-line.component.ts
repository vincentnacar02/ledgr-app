import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TransactionLine, Account } from '../../_models/models';
import { Observable } from 'rxjs';
import { AccountService } from '../../shared/account.service';

@Component({
  selector: 'app-transaction-line',
  templateUrl: './transaction-line.component.html',
  styleUrls: ['./transaction-line.component.css']
})
export class TransactionLineComponent implements OnInit {

  @Input()
  transactionLine: TransactionLine;

  @Output()
  deleteLine: EventEmitter<TransactionLine> = new EventEmitter<TransactionLine>();

  @Output()
  amountChanged: EventEmitter<TransactionLine> = new EventEmitter<TransactionLine>();

  accounts: Account[];
  accounts$: Observable<Account[]>;

  constructor(
    private acctService: AccountService
  ) { }

  ngOnInit() {
    this.accounts$ = this.acctService.fetch();
    this.accounts$.subscribe(data => {
      this.accounts = data;
    })
  }

  delete() {
    this.deleteLine.emit(this.transactionLine);
  }

  recompute() {
    this.amountChanged.emit(this.transactionLine);
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TransactionLine } from '../../_models/models';

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

  constructor() { }

  ngOnInit() {

  }

  delete() {
    this.deleteLine.emit(this.transactionLine);
  }

}

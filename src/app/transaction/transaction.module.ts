import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TransactionMainComponent } from './transaction-main/transaction-main.component';
import { TransactionHeaderComponent } from './transaction-header/transaction-header.component';
import { TransactionLineComponent } from './transaction-line/transaction-line.component';

import { TransactionService } from '../shared/transaction.service';

const CHILD : Routes = [
  {
    path: '',
    component: TransactionMainComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CHILD)
  ],
  declarations: [TransactionMainComponent, TransactionHeaderComponent, TransactionLineComponent],
  exports: [RouterModule],
  providers: [TransactionService]
})
export class TransactionModule { }

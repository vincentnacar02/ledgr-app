import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TransactionMainComponent } from './transaction-main/transaction-main.component';
import { TransactionHeaderComponent } from './transaction-header/transaction-header.component';
import { TransactionLineComponent } from './transaction-line/transaction-line.component';

import { TransactionService } from '../shared/transaction.service';
import { AccountService } from '../shared/account.service';
import { OrganizationService } from '../shared/organization.service';
import { FiscalyearService } from '../shared/fiscalyear.service';
import { UserService } from '../shared/user.service';
import { DocumentService } from '../shared/document.service';

const CHILD : Routes = [
  {
    path: '',
    component: TransactionMainComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CHILD)
  ],
  declarations: [TransactionMainComponent, TransactionHeaderComponent, TransactionLineComponent],
  exports: [RouterModule],
  providers: [
    TransactionService, 
    AccountService, 
    OrganizationService, 
    FiscalyearService, 
    UserService,
    DocumentService
  ]
})
export class TransactionModule { }

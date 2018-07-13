import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TransactionLine, Account, User, DocumentRegister } from '../../_models/models';
import { Observable } from 'rxjs';
import { AccountService } from '../../shared/account.service';
import { UserService } from '../../shared/user.service';
import { DocumentService } from '../../shared/document.service';

@Component({
  selector: 'app-transaction-line',
  templateUrl: './transaction-line.component.html',
  styleUrls: ['./transaction-line.component.css']
})
export class TransactionLineComponent implements OnInit {

  @Input()
  transactionLine: TransactionLine;

  @Input()
  isPosted: boolean;

  @Output()
  deleteLine: EventEmitter<TransactionLine> = new EventEmitter<TransactionLine>();

  @Output()
  amountChanged: EventEmitter<TransactionLine> = new EventEmitter<TransactionLine>();

  accounts: Account[];
  accounts$: Observable<Account[]>;

  users: User[];
  users$: Observable<User[]>;
  docs: DocumentRegister[];
  docs$: Observable<DocumentRegister[]>;

  constructor(
    private acctService: AccountService,
    private userService: UserService,
    private docService: DocumentService
  ) { }

  ngOnInit() {
    this.accounts$ = this.acctService.fetch();
    this.accounts$.subscribe(data => {
      this.accounts = data;
    });
    this.users$ = this.userService.fetch();
    this.users$.subscribe(data => {
      this.users = data;
    });
    this.docs$ = this.docService.fetch();
    this.docs$.subscribe(data => {
      this.docs = data;
    });
  }

  delete() {
    this.deleteLine.emit(this.transactionLine);
  }

  recompute() {
    this.amountChanged.emit(this.transactionLine);
  }

  selectAccount(e) {
    const accountId = e.target.value;
    if (accountId) {
      this.transactionLine.AccountID = accountId;
      if (this.transactionLine.UserID) {
        this.populateDocRef(this.transactionLine.UserID, accountId);
      }
    }
  }

  selectUser(e) {
    const userId = e.target.value;
    if (userId) {
      this.transactionLine.UserID = userId;
      if (this.transactionLine.AccountID) {
        this.populateDocRef(userId, this.transactionLine.AccountID);
      }
    }
  }

  populateDocRef(userId: number, accountId: number) {
    if (userId && accountId) {
      const userDoc = this.docs.find(doc => doc.AccountID == accountId && doc.UserID == userId);
      if (userDoc) {
        this.transactionLine.DocumentRef = userDoc.DocumentRef;
      } else {
        this.transactionLine.DocumentRef = "";
      }
    }
  }

}

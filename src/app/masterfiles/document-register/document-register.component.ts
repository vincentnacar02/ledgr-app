import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../shared/document.service';
import { UserService } from '../../shared/user.service';
import { AccountService } from '../../shared/account.service';
import { DocumentRegister, User, Account } from '../../_models/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-document-register',
  templateUrl: './document-register.component.html',
  styleUrls: ['./document-register.component.css']
})
export class DocumentRegisterComponent implements OnInit {

  doc: DocumentRegister;
  docs$: Observable<DocumentRegister[]>;
  docs: DocumentRegister[];

  users: User[];
  users$: Observable<User[]>;

  accounts: Account[];
  accounts$: Observable<Account[]>;

  constructor(
    private docService: DocumentService,
    private userService: UserService,
    private acctService: AccountService
  ) { }

  ngOnInit() {
    this.reset();
    this.refresh();
  }

  refresh() {
    this.docs$ = this.docService.fetch();
    this.docs$.subscribe(data => {
      console.log(data);
      this.docs = data;
    });
    this.users$ = this.userService.fetch();
    this.users$.subscribe(data => {
      console.log(data);
      this.users = data;
    });
    this.accounts$ = this.acctService.fetch();
    this.accounts$.subscribe(data => {
      this.accounts = data;
    })
  }

  reset() {
    this.doc = new DocumentRegister();
  }

  onSave() {
    this.docService.save(this.doc).subscribe(
    data => {
      console.log({data});
      this.reset();
      this.refresh();
    },
    error => console.log(error));
  }

  onUpdate() {
    this.docService.update(this.doc).subscribe(
      data => {
        console.log({data});
        this.reset();
        this.refresh();
      },
      error => console.log(error));
  }

  onDelete(acct: DocumentRegister) {
    this.docService.delete(acct).subscribe(
      data => {
        console.log({data});
        this.reset();
        this.refresh();
      },
      error => console.log(error));
  }

  onSelect(acct: DocumentRegister) {
    this.doc = acct;
  }

  getUserFullname(userId: number) {
    const user = this.users.find(user => user.UserID == userId);
    return user ? user.FirstName + ' ' + user.LastName : "--";
  }

  getAccountCodeName(accountId: number) {
    const acct = this.accounts.find(acnt => acnt.AccountID == accountId);
    return acct ? acct.AccountCode + ' - ' + acct.AccountName : '--';
  }

  selectUser(e) {
    const selectedUserId = e.target.value;
    this.doc.UserID = selectedUserId;
  }

  selectAccount(e) {
    const selectedAccountId = e.target.value;
    this.doc.AccountID = selectedAccountId;
  }

}

import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared/account.service';
import { Account } from '../../_models/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: Account;
  accounts$: Observable<Account[]>;

  constructor(
    private acctService: AccountService
  ) { }

  ngOnInit() {
    this.reset();
    this.refresh();
  }

  refresh() {
    this.accounts$ = this.acctService.fetch();
    this.accounts$.subscribe(data => {
      console.log(data);
    });
  }

  reset() {
    this.account = new Account();
  }

  onSave() {
    this.acctService.save(this.account).subscribe(
    data => {
      console.log({data});
      this.reset();
      this.refresh();
    },
    error => console.log(error));
  }

  onUpdate() {
    this.acctService.update(this.account).subscribe(
      data => {
        console.log({data});
        this.reset();
        this.refresh();
      },
      error => console.log(error));
  }

  onDelete(acct: Account) {
    this.acctService.delete(acct).subscribe(
      data => {
        console.log({data});
        this.reset();
        this.refresh();
      },
      error => console.log(error));
  }

  onSelect(acct: Account) {
    this.account = acct;
  }
}

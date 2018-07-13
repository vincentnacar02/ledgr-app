import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TransactionHeader, Organization, FiscalYear, Transaction } from '../../_models/models';
import { OrganizationService } from '../../shared/organization.service';
import { FiscalyearService } from '../../shared/fiscalyear.service';
import { Observable } from 'rxjs';
import { TransactionService } from '../../shared/transaction.service';

@Component({
  selector: 'app-transaction-header',
  templateUrl: './transaction-header.component.html',
  styleUrls: ['./transaction-header.component.css']
})
export class TransactionHeaderComponent implements OnInit, OnChanges {

  @Input()
  transactionHeader: TransactionHeader;

  transaction: Transaction;
  transaction$: Observable<Transaction>;
  organizations: Organization[];
  organizations$: Observable<Organization[]>;
  fiscalYears: FiscalYear[];
  fiscalYears$: Observable<FiscalYear[]>;

  constructor(
    private transactionService: TransactionService,
    private orgService: OrganizationService,
    private fyService: FiscalyearService
  ) { }

  ngOnInit() {

    this.transaction$ = this.transactionService.current();
    this.transaction$.subscribe(data => {
      this.transaction = data;
    });

    this.organizations$ = this.orgService.fetch();
    this.organizations$.subscribe(data => {
      this.organizations = data;
    });

    this.fiscalYears$ = this.fyService.fetch();

    if (!this.transactionHeader.TransactionRefID) {
      this.transactionHeader.TransactionRefID = this.guid();
      this.transactionHeader.DateCreated = this.formatDate(new Date().toISOString());
    }

  }

  ngOnChanges() {
    this.refreshFiscalYears();
  }

  refreshFiscalYears() {
    const orgId = this.transactionHeader.OrganizationID;
    if (orgId) {
      this.fiscalYears$.subscribe(data => {
        this.fiscalYears = data.filter(fy => fy.OrganizationID == orgId);
      });
    }
  }

  selectOrganization(e) {
    console.log(e.target.value);
    const selectedOrgId = e.target.value;
    this.transactionHeader.OrganizationID = selectedOrgId;
    this.refreshFiscalYears();
  }

  selectFiscalYear(e) {
    const selectedFiscalYearID = e.target.value;
    this.transactionHeader.FiscalYearID = selectedFiscalYearID;
  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + s4();
  }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

}

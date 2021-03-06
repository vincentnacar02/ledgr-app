import { Component, OnInit } from '@angular/core';
import { FiscalyearService } from '../../shared/fiscalyear.service';
import { OrganizationService } from '../../shared/organization.service';
import { FiscalYear, Organization } from '../../_models/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fiscalyear',
  templateUrl: './fiscalyear.component.html',
  styleUrls: ['./fiscalyear.component.css']
})
export class FiscalyearComponent implements OnInit {

  fy: FiscalYear;
  fys$: Observable<FiscalYear[]>;
  fys: FiscalYear[];
  organizations$: Observable<Organization[]>;
  organizations: Organization[];

  constructor(
    private fyService: FiscalyearService,
    private orgService: OrganizationService
  ) { }

  ngOnInit() {
    this.reset();
    this.refresh();
  }

  refresh() {
    this.fys$= this.fyService.fetch();
    this.fys$.subscribe(data => {
      console.log(data);
      this.fys = data;
    });
    this.organizations$ = this.orgService.fetch();
    this.organizations$.subscribe(data => {
      console.log(data);
      this.organizations = data;
    });
  }

  reset() {
    this.fy = new FiscalYear();
  }

  onSave() {
    console.log(this.fy);
    this.fyService.save(this.fy).subscribe(
    data => {
      console.log({data});
      this.reset();
      this.refresh();
    },
    error => console.log(error));
  }

  onUpdate() {
    this.fyService.update(this.fy).subscribe(
      data => {
        console.log({data});
        this.reset();
        this.refresh();
      },
      error => console.log(error));
  }

  onDelete(fy: FiscalYear) {
    this.fyService.delete(fy).subscribe(
      data => {
        console.log({data});
        this.reset();
        this.refresh();
      },
      error => console.log(error));
  }

  onSelect(fy: FiscalYear) {
    this.fy = fy;
  }

  selectOrganization(e) {
    console.log(e.target.value);
    const orgID = e.target.value;
    this.fy.OrganizationID = orgID;
  }

  getOrganizationName(orgId) {
    const org = this.organizations.find(organization => organization.OrganizationID == orgId);
    return org ? org.OrganizationName : "--";
  }

}

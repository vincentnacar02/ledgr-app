import { Component, OnInit } from '@angular/core';
import { Organization } from '../../_models/models';
import { Observable } from 'rxjs';
import { OrganizationService } from '../../shared/organization.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css'],
  providers: [OrganizationService]
})
export class OrganizationComponent implements OnInit {

  organization: Organization;
  organizations$: Observable<Organization[]>;
  organizations: Organization[];

  constructor(
    private orgService: OrganizationService
  ) { 
    
  }

  ngOnInit() {
    this.reset();
    this.refresh();
  }

  refresh() {
    this.organizations$ = this.orgService.fetch();
    this.organizations$.subscribe(data => {
      console.log(data);
      this.organizations = data;
    });
  }

  reset() {
    this.organization = new Organization();
  }

  onSave() {
    this.orgService.save(this.organization).subscribe(
    data => {
      console.log({data});
      this.reset();
      this.refresh();
    },
    error => console.log(error));
  }

  onUpdate() {
    this.orgService.update(this.organization).subscribe(
      data => {
        console.log({data});
        this.reset();
        this.refresh();
      },
      error => console.log(error));
  }

  onDelete(org: Organization) {
    this.orgService.delete(org).subscribe(
      data => {
        console.log({data});
        this.reset();
        this.refresh();
      },
      error => console.log(error));
  }

  onSelect(org: Organization) {
    this.organization = org;
  }

}

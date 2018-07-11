import { Component, OnInit } from '@angular/core';
import { OrganizationService } from './shared/organization.service';
import { Observable } from 'rxjs';
import { Organization } from './_models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OrganizationService]
})
export class AppComponent implements OnInit {
  organiations$: Observable<Organization[]>;

  constructor(
    private orgService: OrganizationService
  ) {
    
  }

  ngOnInit() {
    this.organiations$ = this.orgService.fetch();
    this.organiations$.subscribe(data => {
      console.log(data);
    })
  }

}

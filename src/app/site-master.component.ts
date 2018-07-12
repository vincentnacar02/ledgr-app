import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';
import { OrganizationService } from './shared/organization.service';
import { Observable } from 'rxjs';
import { Organization } from './_models/models';

@Component({
    selector: 'app-site-master',
    templateUrl: './site-master.component.html',
    styleUrls: ['./site-master.component.css']
})
export class SiteMasterComponent implements OnInit {
    organiations$: Observable<Organization[]>;

    constructor(
        private fbAuth: AngularFireAuth,
        private router: Router,
        private orgService: OrganizationService
    ) { }

    ngOnInit(): void { 
        auth().onAuthStateChanged((user) => {
            if (!user) {
                this.router.navigate(['/auth']);
            }
        });
        this.organiations$ = this.orgService.fetch();
        this.organiations$.subscribe(data => {
          console.log(data);
        })
    }

    logout() {
        this.fbAuth.auth.signOut();
        this.router.navigate(['/auth']);
    }
}

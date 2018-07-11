import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrganizationComponent } from './organization/organization.component';
import { AccountComponent } from './account/account.component';
import { FiscalyearComponent } from './fiscalyear/fiscalyear.component';

const CHILD: Routes = [
  {
    path: 'organization',
    component: OrganizationComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'fiscal-year',
    component: FiscalyearComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CHILD)
  ],
  declarations: [OrganizationComponent, AccountComponent, FiscalyearComponent]
})
export class MasterfilesModule { }

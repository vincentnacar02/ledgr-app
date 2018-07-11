import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { AnnouncementComponent } from './announcement/announcement.component';

const CHILD: Routes = [
  {
    path: '',
    component: DashboardContainerComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CHILD)
  ],
  declarations: [FeedComponent, DashboardContainerComponent, AnnouncementComponent],
  exports: [RouterModule]
})
export class DashboardModule { }

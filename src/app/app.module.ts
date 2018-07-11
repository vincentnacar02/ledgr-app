import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { NgProgressRouterModule } from '@ngx-progressbar/router';

import { OrganizationService } from './shared/organization.service';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule,
    NgProgressRouterModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [OrganizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

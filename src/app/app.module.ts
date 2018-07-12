import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { NgProgressRouterModule } from '@ngx-progressbar/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { OrganizationService } from './shared/organization.service';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { SiteMasterComponent } from './site-master.component';
import { AuthService } from './shared/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SiteMasterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    LoginModule,
    AppRoutingModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule,
    NgProgressRouterModule
  ],
  providers: [OrganizationService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

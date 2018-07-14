import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { auth } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../shared/auth.service';

import { User } from '../_models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isAuthenticated: boolean;
  user$: Observable<User>;

  constructor(
    private fbAuth: AngularFireAuth,
    private authService: AuthService,
    private router: Router
  ){
    console.log('guard start.');
    auth().onAuthStateChanged((user) => {
      if (!user) {
          this.isAuthenticated = false;
      } else {
          this.user$ = this.authService.getUser(user.email);
          this.user$.subscribe(data => {
              let appUser: User = data;
              if (!appUser.UserID) {
                console.log('saving user...');
                this.registerNewUser(appUser, user);
              }
              appUser.PhotoURL = user.photoURL;
          });
          this.isAuthenticated = true;
      }
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      console.log('guard check.');
      if (!this.isAuthenticated) {
        this.router.navigate(['login/auth']);
        return false;
      }

      return true;

  }

  registerNewUser(appUser : User, user: any) {
    appUser.EmailAddress = user.email;
    appUser.UserName = user.email;
    const fullname = user.displayName.split(" ");
    if (fullname) {
      console.log(fullname);
      appUser.FirstName = fullname[0];
      appUser.LastName = fullname[1];
    }
    this.authService.saveOrUpdate(appUser).subscribe(data => {
        console.log(data);
    }, error => console.log(error));
  }

}

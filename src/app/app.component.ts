import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './shared/auth.service';
import { User } from './_models/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  user$: Observable<User>;

  constructor(
    private fbAuth: AngularFireAuth,
    private authService: AuthService,
    private router: Router
  ) {
    
  }

  ngOnInit() {
    console.log('app loaded.');
    auth().onAuthStateChanged((user) => {
      if (!user) {
          this.router.navigate(['/auth']);
      } else {
          this.user$ = this.authService.getUser(user.email);
          this.user$.subscribe(data => {
              let appUser: User = data;
              if (!appUser.UserID) {
                console.log('saving user...');
                this.registerNewUser(appUser, user);
              }
          });
      }
    });
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

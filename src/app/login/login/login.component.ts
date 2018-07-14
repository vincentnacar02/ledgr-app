import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fbAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        // this.router.navigate(['app']);
        window.location.href = '/#/app';
      }
    });
  }

  login() {
    this.fbAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

}

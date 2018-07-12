import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';

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
        this.router.navigate(['/dashboard'])
      }
    });
  }

  login() {
    this.fbAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

}

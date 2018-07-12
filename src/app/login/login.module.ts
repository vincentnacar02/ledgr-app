import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginMasterComponent } from './login-master/login-master.component';

const CHILD: Routes = [
  {
    path: '',
    component: LoginComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CHILD)
  ],
  declarations: [LoginComponent, LoginMasterComponent],
  exports: [RouterModule]
})
export class LoginModule { }

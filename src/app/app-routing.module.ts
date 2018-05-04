import {LoginPageComponent} from './login-page/login-page.component';
import {RouterModule, Routes} from '@angular/router';
import {ErrorPageComponent} from './error-page/error-page.component';
import {NgModule} from '@angular/core';
import {RegisterPageComponent} from './register-page/register-page.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: 'kira',
    redirectTo: '/kira'
  },
  {
    path: 'taskler',
    redirectTo: '/taskler'
  },
  {
    path: 'admin-panel',
    redirectTo: '/admin-panel'
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

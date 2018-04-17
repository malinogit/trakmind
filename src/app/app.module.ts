import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {UserService} from './service/user.service';
import {UserHttpService} from './service/user-http.service';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    LoginPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService, UserHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

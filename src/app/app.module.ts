import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {UserService} from './service/user.service';
import {UserHttpService} from './service/user-http.service';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {CodeHighlighterModule, TabViewModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';
import {KiraModule} from './kira/kira.module';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    KiraModule
  ],
  providers: [UserService, UserHttpService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}

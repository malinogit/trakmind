import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {User} from '../model/user';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  model: User = new User();
  resp: Observable<Subscription> | null = null;
  visibleModal = false;
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.visibleModal = true;
    this.resp = this.userService.login(this.model.username, this.model.password);
    this.resp.subscribe(value => {
      this.visibleModal = false;
      return value;
    });
  }

}

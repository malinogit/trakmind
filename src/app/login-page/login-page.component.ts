import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {User} from '../model/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  model: User = new User();
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.userService.login(this.model.username, this.model.password);
  }

}

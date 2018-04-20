import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../model/user';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  model: User = new User();
  connecting: Observable<boolean> | null = null;
  visibleModal = false;
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.visibleModal = true;
    this.connecting = this.userService.login(this.model.username, this.model.password);
    this.connecting.subscribe(value => {
      console.log(this.router.navigateByUrl('kira'));
      this.visibleModal = true;
      return value;
    });
  }

}

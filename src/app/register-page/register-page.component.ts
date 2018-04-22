import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../service/user.service';
import {UserDto} from '../model/user-dto';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  model: UserDto = new UserDto();
  connecting: Observable<boolean> | null = null;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.initSessionUser();
  }
  onSubmit() {
    console.log(this.model);
    this.userService.registration(this.model);
  }
}

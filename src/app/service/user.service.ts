import { Injectable } from '@angular/core';
import {UserDto} from '../model/user-dto';
import {UserAccess} from '../model/user-access';
import {UserHttpService} from './user-http.service';
import {Observable, Subscribable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Subscription} from 'rxjs/Subscription';
import {tap} from 'rxjs/operators';
import {Privilege} from '../model/privilege.enum';
import {Router} from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';
import {Role} from '../model/role.enum';
import {of} from 'rxjs/observable/of';

@Injectable()
export class UserService {
  constructor(
    private userHttpService: UserHttpService
  ) { }
  userAccess: UserAccess;
  private sessionUser: UserAccess;
  private userDto: UserDto = new UserDto();
  login(login, password): Observable<boolean> {
    this.userDto.username = login;
    return this.userHttpService.login(login, password).map(
      next => {
        this.userAccess = next;
        return true;
      },
      error => {
        console.log(error);
      }
    );
  }
  updateUserDto(): Observable<boolean> {
    return this.userHttpService.getUserDto(this.userAccess, this.userDto).map(
      res => {
      this.userDto = res;
      return true;
    },
      error => {
        console.log(error);
        return false;
      });
  }
  userHasRole(roles: Role[]): Observable<boolean> {
    const containsString = function (val: Role) {
      return roles.includes(val);
    };
    if (roles === null || roles.length === 0) {
      return of(true);
    }
    if (!this.userDto || !this.userDto.roles) {
      return this.updateUserDto().map((value1: boolean) => {
        return value1 && this.userDto && this.userDto.roles && this.userDto.roles.some((role: Role) => containsString(role));
      });
    } else {
      return of(this.userDto.roles.some((role: Role) => containsString(role)));
    }
  }
  userHasPrivilege(privilege: Privilege): Observable<boolean> {
    if (!this.userDto || !this.userDto.privileges) {
      return this.updateUserDto().map((value1: boolean) => {
        return value1 && this.userDto && this.userDto.privileges && this.userDto.privileges.includes(privilege);
      });
    }
  }
  initSessionUser(): void {
    this.userHttpService.initSessionUser().subscribe(value => {
      this.sessionUser = value;
      return value;
    });
  }
  registration(userDto: UserDto): void {
    console.log(this.sessionUser);
    this.userHttpService.registerUser(this.sessionUser, userDto).subscribe(value => {
      console.log(this.sessionUser);
      return value;
    });
  }
}

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

@Injectable()
export class UserService {
  constructor(
    private userHttpService: UserHttpService
  ) { }
  userAccess: UserAccess;
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
    console.log(this.userAccess);
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
  canActivePage(): Observable<boolean> {
    return Observable.create(this.userAccess && this.userAccess.expires_in);
  }
  userHasPrivilege(privilege: Privilege): Observable<boolean> {
    if (!this.userDto || !this.userDto.privileges) {
      return this.updateUserDto().map((value1: boolean) => {
        return value1 && this.userDto && this.userDto.privileges && this.userDto.privileges.includes(privilege);
      });
    }
  }
}

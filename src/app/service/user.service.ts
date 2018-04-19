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

@Injectable()
export class UserService {
  constructor(
    private userHttpService: UserHttpService
  ) { }
  private userAccess: UserAccess;
  private userDto: UserDto = new UserDto();
  login(login, password): Observable<Subscription> {
    this.userDto.username = login;
    return this.userHttpService.login(login, password).map(value => {
      this.userAccess = value;
      return this.getBaseUserDto().pipe(tap(
        resp => {
          return resp.username;
        },
            error => console.log(error)
        )
      ).subscribe(value2 => {
        console.log('dziala');
        return value2;
      });
    });
  }
  getBaseUserDto(): Observable<UserDto> {
    return this.userHttpService.getUserDto(this.userAccess, this.userDto).map(res => {
      this.userDto = res;
      return res;
    });
  }
  canActivePage(): Observable<boolean> {
    return Observable.create(this.userAccess && this.userAccess.expires_in);
  }
  userHasPrivilege(privilege: Privilege): boolean {
    return !!(this.userDto && this.userDto.privileges && this.userDto.privileges.includes(privilege));
  }
}

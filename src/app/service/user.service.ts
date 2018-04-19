import { Injectable } from '@angular/core';
import {UserDto} from '../model/user-dto';
import {UserAccess} from '../model/user-access';
import {UserHttpService} from './user-http.service';
import {Observable, Subscribable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Subscription} from 'rxjs/Subscription';
import {tap} from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor(private userHttpService: UserHttpService) { }
  private userAccess: UserAccess;
  private userDto: UserDto = new UserDto();
  login(login, password): Observable<Subscription> {
    this.userDto.username = login;
    console.log(this.userDto);
    return this.userHttpService.login(login, password).map(value => {
      this.userAccess = value;
      return this.getBaseUserDto().pipe(tap(
        resp => {
          console.log(resp);
          return resp;
        },
            error => console.log(error)
        )
      ).subscribe(value2 => value2);
    });
  }
  getBaseUserDto(): Observable<boolean> {
    return this.userHttpService.getUserDto(this.userAccess, this.userDto).map(res => {
      this.userDto = res;
      console.log(this.userDto);
      return true;
    });
  }
  canActivePage(): Observable<boolean> {
    return Observable.create(this.userAccess && this.userAccess.expires_in);
  }
}

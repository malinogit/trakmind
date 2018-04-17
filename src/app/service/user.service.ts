import { Injectable } from '@angular/core';
import {UserDto} from '../model/user-dto';
import {UserAccess} from '../model/user-access';
import {UserHttpService} from './user-http.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor(private userHttpService: UserHttpService) { }
  private userAccess: UserAccess;
  private userDto: UserDto;
  login(login, password) {
    this.userHttpService.login(login, password).subscribe(
      resp => {
        this.userAccess = resp;
      }
    );
  }
  canActivePage(): Observable<boolean> {
    return Observable.create(this.userAccess && this.userAccess.expires_in);
  }
}

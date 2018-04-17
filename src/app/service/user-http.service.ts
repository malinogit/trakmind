import { Injectable } from '@angular/core';
import {Endpoints} from '../model/endpoints';
import {Observable} from 'rxjs/Observable';
import {UserAccess} from '../model/user-access';
import {UserDto} from '../model/user-dto';
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable()
export class UserHttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Basic ' + btoa('web-trakmind:123456')
    })
  };
  params: URLSearchParams;
  constructor(private http: HttpClient) {
  }
  login(name, password): Observable<UserAccess> {
    this.params = new URLSearchParams();
    this.params.append('username', name);
    this.params.append('password', password);
    this.params.append('grant_type', 'password');
    this.params.append('client_id', 'web-trakmind');
    return this.http.post<UserAccess>(Endpoints.CONTEXT_PATH + '/oauth/token?' + this.params.toString(), {}, this.httpOptions).pipe(
      tap(
        resp => {
          console.log(resp);
          return resp;
        },
        error => this.handleError(error)
      )
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getUserDto(userAccess): Observable<UserDto> {
    return this.http.get<UserDto>(Endpoints.CONTEXT_PATH, this.httpOptions);
  }

  getUserLogs(userAccess: UserAccess): Observable<any> {
    const requestOptions = this.baseOauthRequestOptions(userAccess);
    return this.http.get(Endpoints.CONTEXT_PATH + '/logs?' + requestOptions.params, requestOptions.options);
  }
  private baseOauthRequestOptions(userAccess: UserAccess) {
    this.params = new URLSearchParams();
    this.params.append('Authorization', userAccess.access_token);
    return {
      params: this.params,
      options: {
        headers: new HttpHeaders({'Authorization': 'Bearer ' + userAccess.access_token
        })
      }
    };
  }
}

import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class KiraResolverService implements Resolve<{}> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{}> | Promise<{}> | {} {
    return null;
  }

  constructor() { }

}

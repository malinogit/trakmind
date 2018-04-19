import {Injectable} from '@angular/core';
import {UserService} from '../service/user.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Privilege} from '../model/privilege.enum';
import 'rxjs/add/operator/map';

@Injectable()
export class KiraGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('active');
    if (!this.userService.userHasPrivilege(Privilege.KIRA)) {
      this.router.navigate(['/error']);
      console.log('false');
      return false;
    }
    console.log('true');
    return true;
  }

  constructor(protected userService: UserService, protected router: Router) {
  }

}

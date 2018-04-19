import {Injectable} from '@angular/core';
import {UserService} from '../service/user.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Privilege} from '../model/privilege.enum';
import 'rxjs/add/operator/map';
import {tap} from 'rxjs/operators';

@Injectable()
export class KiraGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('active');
    return this.userService.userHasPrivilege(Privilege.KIRA).pipe(tap(
      (next: boolean) => {
        if (!next) {
          this.router.navigate(['/error']);
        }
        return next;
      },
      error => {
        this.router.navigate(['/error']);
        console.log(error);
      }));
  }

  constructor(protected userService: UserService, protected router: Router) {
  }

}

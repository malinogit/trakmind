import {Injectable} from '@angular/core';
import {UserService} from '../service/user.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Privilege} from '../model/privilege.enum';
import 'rxjs/add/operator/map';
import {tap} from 'rxjs/operators';
import {ViewBlockerService} from '../service/view-blocker.service';

@Injectable()
export class KiraGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('active');
    this.viewBlockerService.visibleModal.visible = true;
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
      })).map( next => {
        this.viewBlockerService.visibleModal.visible = false;
        return next;
    });
  }

  constructor(protected userService: UserService, protected router: Router, private viewBlockerService: ViewBlockerService) {
  }

}

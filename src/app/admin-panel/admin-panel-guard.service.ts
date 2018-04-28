import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Privilege} from '../model/privilege.enum';
import {tap} from 'rxjs/operators';
import {UserService} from '../service/user.service';
import {ViewBlockerService} from '../service/view-blocker.service';
import {Role} from '../model/role.enum';

@Injectable()
export class AdminPanelGuardService implements CanActivate {

  constructor(protected userService: UserService, protected router: Router, private viewBlockerService: ViewBlockerService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.viewBlockerService.visibleModal.visible = true;
    return this.userService.userHasRole([Role.GLOBAL_ADMIN]).pipe(tap(
      (next: boolean) => {
        if (!next) {
          this.router.navigateByUrl('/error');
        } else {
          return next;
        }
      },
      error => {
        this.router.navigateByUrl('/error');
        return false;
      }
    ));
  }

}

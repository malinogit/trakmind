import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../model/user';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {ModuleEnum} from '../model/module.enum';
import {Role} from '../model/role.enum';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  model: User = new User();
  connecting: Observable<boolean> | null = null;
  viewBlockerModal = false;
  viewModuleSelectorModal = false;
  modules: ModuleEnum[] = [];

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.userService.initSessionUser();
  }

  onSubmit() {
    this.viewBlockerModal = true;
    this.connecting = this.userService.login(this.model.username, this.model.password);
    this.connecting.subscribe((value: boolean) => {
      if (value) {
        this.userService.updateUserDto().subscribe((res: boolean) => {
          if (res) {
            this.viewBlockerModal = false;
            this.viewModuleSelectorModal = true;
            this.userService.userHasRole([Role.BASIC_USER]).subscribe(next => {
              if (next === true) {
                this.modules = [ModuleEnum.TASKLER, ModuleEnum.KIRA];
              }
            });
            this.userService.userHasRole([Role.GLOBAL_ADMIN]).subscribe(next => {
              if (next === true) {
                this.modules = [ModuleEnum.KIRA, ModuleEnum.TASKLER, ModuleEnum.ADMIN_PANEL];
              }
            });
          } else {
            alert('no modules available');
          }
        });
      } else {
        alert('failed to login');
      }
    });
  }

  selectedModule(module: ModuleEnum) {
    switch (module) {
      case ModuleEnum.KIRA : {
        this.router.navigateByUrl('kira');
      } break;
      case ModuleEnum.TASKLER : {
        this.router.navigateByUrl('taskler');
      } break;
      case ModuleEnum.ADMIN_PANEL : {
        this.router.navigateByUrl('admin-panel');
      } break;
    }
  }

  goToRegister() {
    this.router.navigateByUrl('register');
  }
  moduleSelectorHide() {
    this.viewModuleSelectorModal = false;
  }
}

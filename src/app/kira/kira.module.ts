import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KiraComponent} from './kira.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {KiraGuardService} from './kira-guard.service';
import {KiraRoutingModule} from './kira-routing.module';
import {ViewBlockerComponent} from '../util/view-blocker/view-blocker.component';
import {DialogModule} from 'primeng/dialog';
import {ViewBlockerService} from '../service/view-blocker.service';
import {SharedModule} from 'primeng/shared';
import {SharedComponentModule} from '../util/shared-component/shared-component.module';

@NgModule({
  imports: [
    DialogModule,
    CommonModule,
    KiraRoutingModule,
    SharedComponentModule
  ],
  declarations: [
    KiraComponent,
    DashboardComponent
  ],
  providers: [
    KiraGuardService,
  ],
  exports: [
  ]
})
export class KiraModule {
}

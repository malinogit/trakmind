import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KiraComponent} from './kira.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {KiraGuardService} from './kira-guard.service';
import {KiraRoutingModule} from './kira-routing.module';
import {ViewBlockerComponent} from '../util/view-blocker/view-blocker.component';
import {DialogModule} from 'primeng/dialog';
import {ViewBlockerService} from '../service/view-blocker.service';

@NgModule({
  imports: [
    DialogModule,
    CommonModule,
    KiraRoutingModule
  ],
  declarations: [
    KiraComponent,
    DashboardComponent,
    ViewBlockerComponent
  ],
  providers: [
    KiraGuardService,
    ViewBlockerService
  ],
  exports: [
    ViewBlockerComponent
  ]
})
export class KiraModule {
}

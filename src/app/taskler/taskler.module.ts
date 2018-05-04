import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasklerComponent } from './taskler.component';
import {TasklerRoutingModule} from './taskler-routing.module';
import {SharedComponentModule} from '../util/shared-component/shared-component.module';
import {ViewBlockerService} from '../service/view-blocker.service';
import {TasklerGuardService} from './taskler-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    TasklerRoutingModule,
    SharedComponentModule
  ],
  declarations: [
    TasklerComponent,
    DashboardComponent
  ],
  providers: [
    ViewBlockerService,
    TasklerGuardService
  ]
})
export class TasklerModule { }

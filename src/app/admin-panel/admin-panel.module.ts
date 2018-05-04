import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminPanelComponent} from './admin-panel.component';
import {ViewBlockerComponent} from '../util/view-blocker/view-blocker.component';
import {AdminPanelRoutingModule} from './admin-panel-routing.module';
import {ViewBlockerService} from '../service/view-blocker.service';
import {SharedModule} from 'primeng/shared';
import {AdminPanelGuardService} from './admin-panel-guard.service';
import {SharedComponentModule} from '../util/shared-component/shared-component.module';

@NgModule({
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    SharedComponentModule
  ],
  declarations: [
    AdminPanelComponent
  ],
  providers: [
    ViewBlockerService,
    AdminPanelGuardService
  ],
  exports: [
  ]
})
export class AdminPanelModule { }

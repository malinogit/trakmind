import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminPanelComponent} from './admin-panel.component';
import {ViewBlockerComponent} from '../util/view-blocker/view-blocker.component';
import {AdminPanelRoutingModule} from './admin-panel-routing.module';
import {ViewBlockerService} from '../service/view-blocker.service';
import {SharedModule} from 'primeng/shared';

@NgModule({
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    SharedModule
  ],
  declarations: [
    AdminPanelComponent
  ],
  providers: [
    ViewBlockerService
  ],
  exports: [
  ]
})
export class AdminPanelModule { }

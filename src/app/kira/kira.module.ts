import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KiraComponent} from './kira.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {KiraGuardService} from './kira-guard.service';
import {KiraRoutingModule} from './kira-routing.module';

@NgModule({
  imports: [
    CommonModule,
    KiraRoutingModule
  ],
  declarations: [
    KiraComponent,
    DashboardComponent
  ],
  providers: [
    KiraGuardService
  ],
  exports: [
  ]
})
export class KiraModule {
}

import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminPanelComponent} from './admin-panel.component';
import {AdminPanelGuardService} from './admin-panel-guard.service';

const adminPanelRouter: Routes = [
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    canActivate: [AdminPanelGuardService],
    resolve: {
    },
    children: [
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(adminPanelRouter)
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [
  ]
})
export class AdminPanelRoutingModule {
}

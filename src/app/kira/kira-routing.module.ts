import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {KiraComponent} from './kira.component';
import {KiraGuardService} from './kira-guard.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {KiraResolverService} from './kira-resolver.service';

const kiraRouter: Routes = [
  {
    path: 'kira',
    component: KiraComponent,
    canActivate: [KiraGuardService],
    resolve: {
      resolver: KiraResolverService
    },
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(kiraRouter)
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [
    KiraResolverService
  ]
})
export class KiraRoutingModule {
}

import {TasklerComponent} from '../taskler/taskler.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TasklerGuardService} from './taskler-guard.service';
import {DashboardComponent} from './dashboard/dashboard.component';

const tasklerRouter: Routes = [
  {
    path: 'taskler',
    component: TasklerComponent,
    canActivate: [TasklerGuardService],
    resolve: {
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
    RouterModule.forRoot(tasklerRouter)
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [
  ]
})
export class TasklerRoutingModule {
}

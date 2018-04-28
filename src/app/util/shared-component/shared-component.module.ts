import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewBlockerComponent} from '../view-blocker/view-blocker.component';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  imports: [
    CommonModule,
    DialogModule
  ],
  declarations: [
    ViewBlockerComponent
  ],
  exports: [
    ViewBlockerComponent
  ]
})
export class SharedComponentModule { }

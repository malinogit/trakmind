import { Component, OnInit } from '@angular/core';
import {ViewBlockerService} from '../service/view-blocker.service';

@Component({
  selector: 'app-kira',
  templateUrl: './kira.component.html',
  styleUrls: ['./kira.component.css']
})
export class KiraComponent implements OnInit {
  visibleModal = this.viewBlockerService.visibleModal;
  constructor(
    private viewBlockerService: ViewBlockerService
  ) { }

  ngOnInit() {
  }

}

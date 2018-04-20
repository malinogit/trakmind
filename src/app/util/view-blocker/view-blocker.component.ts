import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-view-blocker',
  templateUrl: './view-blocker.component.html',
  styleUrls: ['./view-blocker.component.css']
})
export class ViewBlockerComponent implements OnInit {
  @Input('visible')
  visible = false;
  constructor() { }

  ngOnInit() {
  }

}

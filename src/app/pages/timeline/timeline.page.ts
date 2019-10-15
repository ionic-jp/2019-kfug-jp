import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {
  items = Array.from(new Array(10)).map((v, i) => i);
  constructor() {}

  ngOnInit() {}
}

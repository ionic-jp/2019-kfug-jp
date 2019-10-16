import { Component, OnInit, OnDestroy } from '@angular/core';
import { Events } from '../../providers/events';

@Component({
  selector: 'settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit, OnDestroy {
  dark = false;
  theme$;
  constructor(private events: Events) {}

  ngOnInit() {
    this.theme$ = this.events.subscribe('theme', theme => {
      this.dark = theme;
    });
    this.events.publish('subscribe', new Date());
  }

  ngOnDestroy() {
    this.theme$.unsubscribe();
  }

  changeTheme() {
    console.log(this.dark);
    this.events.publish('theme', this.dark);
  }
}

import { Component } from '@angular/core';
import { Events } from '../../providers/events';

@Component({
  selector: 'settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  dark = false;
  constructor(private events: Events) {}

  changeTheme() {
    this.events.publish('theme', this.dark);
  }
}

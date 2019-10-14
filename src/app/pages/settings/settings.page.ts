import { Component } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  dark = false;
  constructor(public events: Events) {}

  changeTheme() {
    this.events.publish('theme', this.dark);
  }
}

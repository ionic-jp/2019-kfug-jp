import { Component, ViewEncapsulation } from '@angular/core';

import { Events, PopoverController } from '@ionic/angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage {
  conferenceDate = '2047-05-17';
  dark = false;

  constructor(public popoverCtrl: PopoverController, public events: Events) {}

  changeTheme() {
    this.events.publish('theme', this.dark);
  }
}

import { Component, ViewEncapsulation } from '@angular/core';

import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage {
  conferenceDate = '2047-05-17';

  constructor(public popoverCtrl: PopoverController) { }
}

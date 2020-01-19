import { Component, OnInit } from '@angular/core';
import { SettingsService, ILicense } from '../settings.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'license',
  templateUrl: './license.page.html',
  styleUrls: ['./license.page.scss'],
})
export class LicensePage implements OnInit {
  licenses: ILicense[] = [];
  isReady = false;
  constructor(private settings: SettingsService, private modalCtrl: ModalController) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.settings.getLicenses().subscribe(l => {
      this.isReady = true;
      this.licenses = l;
    });
  }
}

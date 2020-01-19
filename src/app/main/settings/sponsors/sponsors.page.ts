import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SettingsService, ICompany, ICommunity } from '../settings.service';

@Component({
  selector: 'sponsors',
  templateUrl: './sponsors.page.html',
  styleUrls: ['./sponsors.page.scss'],
})
export class SponsorsPage {
  platinumList: ICompany[] = [];
  goldList: ICompany[] = [];
  silverList: ICompany[] = [];
  communityList: ICommunity[] = [];
  constructor(private settings: SettingsService, public modalCtrl: ModalController) {}

  ionViewDidEnter() {
    this.settings.getSponsorList().subscribe(list => {
      this.platinumList = list.company.filter(c => c.rank === 'platinum');
      this.goldList = list.company.filter(c => c.rank === 'gold');
      this.silverList = list.company.filter(c => c.rank === 'silver');
      this.communityList = list.community;
    });
  }
}

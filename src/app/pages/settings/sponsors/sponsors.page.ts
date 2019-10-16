import { Component } from '@angular/core';
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
  constructor(private settings: SettingsService) {}

  ionViewDidEnter() {
    this.settings.getCommunityList().subscribe(list => {
      this.platinumList = list.company.filter(c => c.rank === 'platinum');
      this.goldList = list.company.filter(c => c.rank === 'gold');
      this.silverList = list.company.filter(c => c.rank === 'silver');
      this.communityList = list.community;
    });
  }
}

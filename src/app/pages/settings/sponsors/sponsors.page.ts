import { Component, OnInit } from '@angular/core';
import { SponsorsService, ICompany, ICommunity } from './sponsors.service';

@Component({
  selector: 'sponsors',
  templateUrl: './sponsors.page.html',
  styleUrls: ['./sponsors.page.scss'],
})
export class SponsorsPage implements OnInit {
  platinumList: ICompany[] = [];
  goldList: ICompany[] = [];
  silverList: ICompany[] = [];
  communityList: ICommunity[] = [];
  constructor(private community: SponsorsService) {}

  ngOnInit() {
    this.community.getCommunityList().subscribe(list => {
      this.platinumList = list.company.filter(c => c.rank === 'platinum');
      this.goldList = list.company.filter(c => c.rank === 'gold');
      this.silverList = list.company.filter(c => c.rank === 'silver');
      this.communityList = list.community;
    });
  }
}

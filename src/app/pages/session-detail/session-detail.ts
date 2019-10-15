import { Component } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../providers/user-data';
import { ISession } from '../../interfaces/data.json';

@Component({
  selector: 'page-session-detail',
  styleUrls: ['./session-detail.scss'],
  templateUrl: 'session-detail.html',
})
export class SessionDetailPage {
  session: ISession;
  isFavorite = false;
  defaultHref = `/app/schedule`;

  constructor(private dataProvider: ConferenceData, private userProvider: UserData, private route: ActivatedRoute) {}

  ionViewWillEnter() {
    this.dataProvider.load().subscribe(async data => {
      const sessionId = this.route.snapshot.paramMap.get('sessionId');
      for (const group of data.schedule[0].groups) {
        this.session = group.sessions.find(session => session.id === sessionId);
        this.isFavorite = this.userProvider.hasFavorite(this.session.id);
        if (this.session) {
          break;
        }
      }
    });
  }

  toggleFavorite() {
    if (this.userProvider.hasFavorite(this.session.id)) {
      this.userProvider.removeFavorite(this.session.id);
      this.isFavorite = false;
    } else {
      this.userProvider.addFavorite(this.session.id);
      this.isFavorite = true;
    }
  }
}

import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, LoadingController, Config } from '@ionic/angular';

import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';
import { IGroups, ISession } from '../../interfaces/data.json';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  styleUrls: ['./schedule.scss'],
})
export class SchedulePage implements OnInit {
  @ViewChild('scheduleList', { static: true }) scheduleList: IonList;

  ios: boolean;
  dayIndex = 0;
  queryText = '';
  segment = 'all';
  shownSessions: number;
  groups: IGroups[] = [];

  constructor(
    public alertCtrl: AlertController,
    public confData: ConferenceData,
    public router: Router,
    public user: UserData,
    public config: Config,
  ) {}

  ngOnInit() {
    this.updateSchedule();
    this.ios = this.config.get('mode') === 'ios';
  }

  updateSchedule() {
    if (this.scheduleList) {
      this.scheduleList.closeSlidingItems();
    }

    this.confData.getTimeline(this.dayIndex, this.queryText, this.segment).subscribe(data => {
      this.shownSessions = data.shownSessions;
      this.groups = data.groups;
    });
  }

  async addFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: ISession) {
    if (this.user.hasFavorite(sessionData.id)) {
      this.removeFavorite(slidingItem, sessionData);
    } else {
      const alert = await this.alertCtrl.create({
        header: 'お気に入り追加',
        message: 'あとから見返す時のためにお気に入りに追加しますか？お気に入り情報はこのデバイスに保存されます。',
        buttons: [
          {
            text: 'キャンセル',
            handler: () => {
              slidingItem.close();
            },
          },
          {
            text: '追加する',
            handler: () => {
              this.user.addFavorite(sessionData.id);
              this.updateSchedule();
              slidingItem.close();
            },
          },
        ],
      });
      await alert.present();
    }
  }

  async removeFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any) {
    const alert = await this.alertCtrl.create({
      header: 'お気に入り削除',
      message: 'お気に入りから削除しますか？削除しても、もう一度クリックするとお気に入りに追加することができます。',
      buttons: [
        {
          text: 'キャンセル',
          handler: () => {
            slidingItem.close();
          },
        },
        {
          text: '削除する',
          handler: () => {
            this.user.removeFavorite(sessionData.id);
            this.updateSchedule();
            slidingItem.close();
          },
        },
      ],
    });
    await alert.present();
  }
}

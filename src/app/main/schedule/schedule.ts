import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, Config } from '@ionic/angular';

import { ConferenceData } from '../../shared/services/conference-data';
import { UserData } from '../../shared/services/user-data';
import { IGroups, ISession } from '../../interfaces/data.json';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  styleUrls: ['./schedule.scss'],
})
export class SchedulePage {
  @ViewChild('scheduleList', { static: true }) scheduleList: IonList;

  ios: boolean;
  isReady = false;
  dayIndex = 0;
  queryText = '';
  segment = 'all';
  shownSessions: number;
  groups: IGroups[] = [];

  constructor(
    private alertCtrl: AlertController,
    private confData: ConferenceData,
    private router: Router,
    private user: UserData,
    private config: Config,
  ) {}

  ionViewWillEnter() {
    this.updateSchedule();
    this.ios = this.config.get('mode') === 'ios';
  }

  updateSchedule() {
    if (this.scheduleList) {
      this.scheduleList.closeSlidingItems();
    }

    this.confData.getTimeline(this.dayIndex, this.queryText, this.segment).subscribe(data => {
      this.isReady = true;
      this.shownSessions = data.shownSessions;
      this.groups = data.groups;
    });
  }

  async addFavorite(slidingItem: HTMLIonItemSlidingElement | any, sessionData: ISession) {
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

  trackByGroup(index: number, value: IGroups): string {
    return value ? value.time : null;
  }

  trackBySession(index: number, value: ISession): string {
    return value ? value.id : null;
  }
}

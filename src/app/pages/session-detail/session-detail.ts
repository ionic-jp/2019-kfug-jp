import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SpeakerDetailPage } from '../speaker-detail/speaker-detail';

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
  isModal = false;
  session: ISession;
  sessionId: string;
  isFavorite = false;
  defaultHref = `/app/schedule`;

  constructor(
    private dataProvider: ConferenceData,
    private userProvider: UserData,
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
  ) {}

  ionViewWillEnter() {
    this.dataProvider.load().subscribe(async data => {
      if (!this.isModal) {
        this.sessionId = this.route.snapshot.paramMap.get('sessionId');
      }
      for (const group of data.schedule[0].groups) {
        this.session = group.sessions.find(session => session.id === this.sessionId);
        if (this.session) {
          this.isFavorite = this.userProvider.hasFavorite(this.session.id);
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

  async openSpeakerModal() {
    const modal = await this.modalCtrl.create({
      component: SpeakerDetailPage,
      componentProps: {
        speakerId: this.session.id,
        isModal: true,
      },
    });
    await modal.present();
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}

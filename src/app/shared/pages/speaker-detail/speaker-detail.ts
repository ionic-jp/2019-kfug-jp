import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ConferenceData } from '../../services/conference-data';
import { ISpeaker } from '../../../interfaces/data.json';
import { SessionDetailPage } from '../session-detail/session-detail';

@Component({
  selector: 'page-speaker-detail',
  templateUrl: 'speaker-detail.html',
  styleUrls: ['./speaker-detail.scss'],
})
export class SpeakerDetailPage {
  speaker: ISpeaker;
  isModal = false;
  speakerId: string;

  constructor(
    private dataProvider: ConferenceData,
    private router: Router,
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
  ) {}

  ionViewWillEnter() {
    this.dataProvider.load().subscribe(data => {
      if (!this.isModal) {
        this.speakerId = this.route.snapshot.paramMap.get('speakerId');
      }
      this.speaker = data.speakers.find(speaker => speaker.key === this.speakerId);
    });
  }

  async openSessionModal() {
    const modal = await this.modalCtrl.create({
      component: SessionDetailPage,
      componentProps: {
        sessionId: this.speakerId,
        isModal: true,
      },
    });
    await modal.present();
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}

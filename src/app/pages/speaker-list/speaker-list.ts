import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

import { ConferenceData } from '../../providers/conference-data';
import { ISpeaker } from '../../interfaces/data.json';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
  speakers: ISpeaker[] = [];
  isReady = false;

  constructor(public actionSheetCtrl: ActionSheetController, public confData: ConferenceData, public router: Router) {}

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.isReady = true;
      this.speakers = speakers;
    });
  }

  trackBySpeaker(index: number, value: ISpeaker): string {
    return value ? value.key : null;
  }
}

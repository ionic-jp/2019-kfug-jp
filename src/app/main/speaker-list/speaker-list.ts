import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, IonContent } from '@ionic/angular';

import { ConferenceData } from '../../shared/services/conference-data';
import { ISpeaker } from '../../interfaces/data.json';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
  @ViewChild(IonContent)
  private content: IonContent;

  isReady = false;
  speakers: ISpeaker[] = [];
  menuType: 'speaker' | 'tutor' = 'speaker';
  private _speakers: ISpeaker[] = [];

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private confData: ConferenceData,
    private router: Router,
  ) {}

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: ISpeaker[]) => {
      this.isReady = true;
      this._speakers = speakers;
      this.selectedMenu(null, speakers);
    });
  }

  selectedMenu(event = null, _speakers: ISpeaker[] = null): void {
    const type = event ? event.detail.value : this.menuType;
    const speakers = _speakers ? _speakers : this._speakers;

    if (event) {
      this.content.scrollToTop();
    }

    this.speakers = speakers.filter(d => {
      if (type === 'speaker') {
        return !d.session.title.includes('ハンズオン');
      } else {
        return d.session.title.includes('ハンズオン');
      }
    });
  }

  trackBySpeaker(index: number, value: ISpeaker): string {
    return value ? value.key : null;
  }
}

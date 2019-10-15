import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';
import { ISpeaker } from '../../interfaces/data.json';

@Component({
  selector: 'page-speaker-detail',
  templateUrl: 'speaker-detail.html',
  styleUrls: ['./speaker-detail.scss', '../schedule/schedule.scss'],
})
export class SpeakerDetailPage {
  speaker: ISpeaker;

  constructor(private dataProvider: ConferenceData, private router: Router, private route: ActivatedRoute) {}

  ionViewWillEnter() {
    this.dataProvider.load().subscribe(data => {
      const speakerId = this.route.snapshot.paramMap.get('speakerId');
      if (data && data.speakers) {
        for (const speaker of data.speakers) {
          if (speaker && speaker.key === speakerId) {
            this.speaker = speaker;
            break;
          }
        }
      }
    });
  }
}

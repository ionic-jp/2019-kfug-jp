import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SpeakerListPage } from './speaker-list';
import { SpeakerDetailModule } from '../speaker-detail/speaker-detail.module';
import { SpeakerListPageRoutingModule } from './speaker-list-routing.module';

@NgModule({
  imports: [CommonModule, IonicModule, SpeakerDetailModule, SpeakerListPageRoutingModule],
  declarations: [SpeakerListPage],
})
export class SpeakerListModule {}

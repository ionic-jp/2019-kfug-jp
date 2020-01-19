import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SpeakerListPage } from './speaker-list';
import { SharedModule } from '../../shared/shared.module';
import { SpeakerListPageRoutingModule } from './speaker-list-routing.module';

@NgModule({
  imports: [CommonModule, IonicModule, SharedModule, SpeakerListPageRoutingModule],
  declarations: [SpeakerListPage],
})
export class SpeakerListModule {}

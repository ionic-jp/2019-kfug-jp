import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SpeakerListPage } from './speaker-list';
import { ModalModule } from '../modal/modal.module';
import { SpeakerListPageRoutingModule } from './speaker-list-routing.module';

@NgModule({
  imports: [CommonModule, IonicModule, ModalModule, SpeakerListPageRoutingModule],
  declarations: [SpeakerListPage],
})
export class SpeakerListModule {}

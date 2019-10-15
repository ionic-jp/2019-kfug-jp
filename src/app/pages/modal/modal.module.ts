import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SpeakerDetailPage } from '../speaker-detail/speaker-detail';
import { SessionDetailPage } from '../session-detail/session-detail';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [SpeakerDetailPage, SessionDetailPage],
  exports: [SpeakerDetailPage, SessionDetailPage],
})
export class ModalModule {}

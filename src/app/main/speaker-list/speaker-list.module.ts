import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SpeakerListPage } from './speaker-list';
import { SharedModule } from '../../shared/shared.module';
import { SpeakerListPageRoutingModule } from './speaker-list-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, IonicModule, SharedModule, SpeakerListPageRoutingModule, FormsModule],
  declarations: [SpeakerListPage],
})
export class SpeakerListModule {}

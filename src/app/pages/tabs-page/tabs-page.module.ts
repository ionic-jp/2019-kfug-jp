import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { SettingsModule } from '../settings/settings.module';
import { CommunityModule } from '../community/community.module';
import { SessionDetailModule } from '../session-detail/session-detail.module';
import { SpeakerDetailModule } from '../speaker-detail/speaker-detail.module';
import { SpeakerListModule } from '../speaker-list/speaker-list.module';
import { SchedulePage } from '../schedule/schedule';

@NgModule({
  imports: [
    SettingsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CommunityModule,
    SessionDetailModule,
    SpeakerDetailModule,
    SpeakerListModule,
    TabsPageRoutingModule,
  ],
  declarations: [TabsPage, SchedulePage],
})
export class TabsPageModule {}

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

import { TabsPage } from './main/tabs-page/tabs-page';
import { SpeakerListModule } from './main/speaker-list/speaker-list.module';
import { SchedulePage } from './main/schedule/schedule';
import { SettingsModule } from './main/settings/settings.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    SpeakerListModule,
    SettingsModule,
    CommonModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  declarations: [AppComponent, TabsPage, SchedulePage],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

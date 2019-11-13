import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

import { TabsPage } from './pages/tabs-page/tabs-page';
import { SpeakerListModule } from './pages/speaker-list/speaker-list.module';
import { SchedulePage } from './pages/schedule/schedule';
import { SettingsModule } from './pages/settings/settings.module';
import { CommonModule } from '@angular/common';
import { ModalModule } from './pages/modal/modal.module';

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
    ModalModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  declarations: [AppComponent, TabsPage, SchedulePage],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

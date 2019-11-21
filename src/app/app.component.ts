import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { MenuController, Platform, ToastController } from '@ionic/angular';

import { UserData } from './providers/user-data';
import { ConferenceData } from './providers/conference-data';
import { Events } from './providers/events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: 'スケジュール',
      url: '/app/schedule',
      icon: 'calendar',
    },
    {
      title: 'スピーカー',
      url: '/app/speakers',
      icon: 'person',
    },
    {
      title: '話題をみる',
      url: '/app/timeline',
      icon: 'logo-twitter',
    },
    {
      title: 'その他',
      url: '/app/settings',
      icon: 'settings',
    },
  ];
  dark = false;

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private userData: UserData,
    private conference: ConferenceData,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
    private events: Events,
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: '最新版を利用できるようになりました',
        position: 'bottom',
        buttons: [`アップデートする`],
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });

    if ('theme' in localStorage) {
      this.dark = localStorage.theme === 'true';
      this.events.publish('theme', this.dark);
    }

    this.events.subscribe('subscribe', event => {
      this.events.publish('theme', this.dark);
    });

    this.events.subscribe('theme', theme => {
      localStorage.theme = theme;
      this.dark = theme;
    });
  }

  initializeApp() {
    this.conference.load();
    this.platform.ready().then(() => {});
  }
}

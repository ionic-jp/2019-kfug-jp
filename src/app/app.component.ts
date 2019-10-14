import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { Events, MenuController, Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { UserData } from './providers/user-data';

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
      icon: 'contacts',
    },
    {
      title: 'コミュニティ',
      url: '/app/community',
      icon: 'beer',
    },
    {
      title: 'その他',
      url: '/app/settings',
      icon: 'settings',
    },
  ];
  dark = false;

  constructor(
    private events: Events,
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private storage: Storage,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: '最新版を利用できるようになりました',
        showCloseButton: true,
        position: 'bottom',
        closeButtonText: `アップデートする`,
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });

    this.events.subscribe('theme', theme => (this.dark = theme));
  }

  initializeApp() {
    this.platform.ready().then(() => {});
  }
}

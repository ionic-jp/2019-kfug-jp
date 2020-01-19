import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { LicensePage } from './license/license.page';
import { SponsorsPage } from './sponsors/sponsors.page';
import { Events } from '../../shared/services/events';

@Component({
  selector: 'settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit, OnDestroy {
  dark = false;
  theme$;
  constructor(private events: Events, private modalCtrl: ModalController, private routerOutlet: IonRouterOutlet) {}

  ngOnInit() {
    this.theme$ = this.events.subscribe('theme', theme => {
      this.dark = theme;
    });
    this.events.publish('subscribe', new Date());
  }

  ngOnDestroy() {
    this.theme$.unsubscribe();
  }

  async openSponsor() {
    const modal = await this.modalCtrl.create({
      component: SponsorsPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    return await modal.present();
  }

  async openLicense() {
    const modal = await this.modalCtrl.create({
      component: LicensePage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    return await modal.present();
  }

  changeTheme() {
    console.log(this.dark);
    this.events.publish('theme', this.dark);
  }
}

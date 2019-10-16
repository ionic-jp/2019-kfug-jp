import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SettingsPage } from './settings.page';
import { SponsorsPage } from './sponsors/sponsors.page';
import { LicensePage } from './license/license.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage,
  },
  {
    path: 'sponsors',
    component: SponsorsPage,
  },
  {
    path: 'licenses',
    component: LicensePage,
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [SettingsPage, SponsorsPage, LicensePage],
})
export class SettingsModule {}

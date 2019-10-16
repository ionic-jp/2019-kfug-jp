import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SettingsPage } from './settings.page';
import { SponsorsPage } from './sponsors/sponsors.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage,
  },
  {
    path: 'sponsors',
    component: SponsorsPage,
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [SettingsPage, SponsorsPage],
})
export class SettingsModule {}

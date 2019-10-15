import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from '../schedule/schedule';
import { SessionDetailPage } from '../session-detail/session-detail';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            component: SchedulePage,
          },
          {
            path: 'session/:sessionId',
            component: SessionDetailPage,
          },
        ],
      },
      {
        path: 'speakers',
        loadChildren: () => import('../speaker-list/speaker-list.module').then(m => m.SpeakerListModule),
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule),
          },
        ],
      },
      {
        path: 'timeline',
        children: [
          {
            path: '',
            loadChildren: () => import('../timeline/timeline.module').then(m => m.TimelinePageModule),
          },
        ],
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'schedule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

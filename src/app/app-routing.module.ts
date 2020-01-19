import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { TabsPage } from './main/tabs-page/tabs-page';
import { SchedulePage } from './main/schedule/schedule';
import { SessionDetailPage } from './shared/pages/session-detail/session-detail';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app/schedule',
    pathMatch: 'full',
  },
  {
    path: 'app',
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
        loadChildren: () => import('./main/speaker-list/speaker-list.module').then(m => m.SpeakerListModule),
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () => import('./main/settings/settings.module').then(m => m.SettingsModule),
          },
        ],
      },
      {
        path: 'timeline',
        children: [
          {
            path: '',
            loadChildren: () => import('./main/timeline/timeline.module').then(m => m.TimelinePageModule),
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
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

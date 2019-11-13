import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { TabsPage } from './pages/tabs-page/tabs-page';
import { SchedulePage } from './pages/schedule/schedule';
import { SessionDetailPage } from './pages/session-detail/session-detail';

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
        loadChildren: () => import('./pages/speaker-list/speaker-list.module').then(m => m.SpeakerListModule),
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule),
          },
        ],
      },
      {
        path: 'timeline',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/timeline/timeline.module').then(m => m.TimelinePageModule),
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

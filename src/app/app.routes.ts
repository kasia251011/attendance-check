import { Routes } from '@angular/router';
import { App } from './app';
import { CurrentEventPage } from './components/pages/current-event-page/current-event-page';
import { PreviousPage } from './components/pages/previous-events-page/previous-events-page';
import { HomePage } from './components/home-page/home-page';
import { PrevEventPage } from './components/pages/prev-event-page/prev-event-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: '', redirectTo: 'current-event', pathMatch: 'full' },
      {
        path: 'current-event',
        component: CurrentEventPage,
      },
      {
        path: 'previous-events',
        component: PreviousPage,
      },
      {
        path: 'previous-events/:id',
        component: PrevEventPage,
      },
    ],
  },
];

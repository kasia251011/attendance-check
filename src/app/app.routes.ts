import { Routes } from '@angular/router';
import { App } from './app';
import { CurrentEventPage } from './components/current-event-page/current-event-page';
import { PreviousPage } from './components/previous-page/previous-page';
import { HomePage } from './components/home-page/home-page';
import { PrevEventPage } from './components/prev-event-page/prev-event-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: '', redirectTo: 'current', pathMatch: 'full' },
      {
        path: 'current',
        component: CurrentEventPage,
      },
      {
        path: 'previous',
        component: PreviousPage,
      },
      {
        path: 'previous/:id',
        component: PrevEventPage,
      },
    ],
  },
];

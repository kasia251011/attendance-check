import { Routes } from '@angular/router';
import { App } from './app';
import { UpcomingPage } from './upcoming-page/upcoming-page';
import { PreviousPage } from './previous-page/previous-page';
import { HomePage } from './home-page/home-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: '', redirectTo: 'upcoming', pathMatch: 'full' },
      {
        path: 'upcoming',
        component: UpcomingPage,
      },
      {
        path: 'previous',
        component: PreviousPage,
      },
    ],
  },
];

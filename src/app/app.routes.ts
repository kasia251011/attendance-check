import { Routes } from '@angular/router';
import { App } from './app';
import { UpcomingPage } from './components/upcoming-page/upcoming-page';
import { PreviousPage } from './components/previous-page/previous-page';
import { HomePage } from './components/home-page/home-page';

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

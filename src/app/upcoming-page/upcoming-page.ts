import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-upcoming-page',
  imports: [MatSlideToggleModule],
  templateUrl: './upcoming-page.html',
})
export class UpcomingPage {
  users = DUMMY_USERS;
}

import { Component } from '@angular/core';
import { EventsService } from '../../services/events/events.service';
import dayjs from 'dayjs';
import { UsersService } from '../../services/users/users.service';
import { MatButtonModule } from '@angular/material/button';
import { UserCheckIn } from '../user-check-in/user-check-in';

@Component({
  selector: 'app-upcoming-page',
  imports: [MatButtonModule, UserCheckIn],
  templateUrl: './upcoming-page.html',
})
export class UpcomingPage {
  constructor(
    private eventsService: EventsService,
    private usersService: UsersService,
  ) {}

  getActiveEvent() {
    return this.eventsService.getActiveEvent();
  }

  createEvent(name: string) {
    this.eventsService.createEvent(name, dayjs(), this.usersService.getUsers());
  }
}

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
  activeEvent;
  events;
  constructor(
    private eventsService: EventsService,
    private usersService: UsersService,
  ) {
    this.activeEvent = this.eventsService.activeEvent;
    this.events = this.eventsService.events;
  }

  getAttendeesCheckedInCount() {
    return this.activeEvent()?.attendees?.filter((u: any) => u.checkedIn).length || 0;
  }

  createEvent(name: string) {
    this.eventsService.createEvent(name, dayjs(), this.usersService.getUsers());
  }

  saveEvent() {
    this.eventsService.saveEvent();
  }
}

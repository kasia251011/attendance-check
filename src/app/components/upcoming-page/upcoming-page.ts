import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EventsService } from '../../services/events/events.service';
import dayjs from 'dayjs';
import { UsersService } from '../../services/users/users.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-upcoming-page',
  imports: [MatSlideToggleModule, MatButtonModule],
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

  checkInUser(userId: number, eventId: number, isCheckedIn: boolean) {
    if (isCheckedIn) {
      this.eventsService.checkInUser(eventId.toString(), userId.toString());
    } else {
      this.eventsService.checkOutUser(eventId.toString(), userId.toString());
    }
  }
}

import { Component, computed, inject } from '@angular/core';
import { EventsService } from '../../services/events/events.service';
import dayjs from 'dayjs';
import { UsersService } from '../../services/users/users.service';
import { MatButtonModule } from '@angular/material/button';
import { UserCheckIn } from '../user-check-in/user-check-in';
import { countCheckedIn } from '../../services/events/events.utils';

@Component({
  selector: 'app-upcoming-page',
  imports: [MatButtonModule, UserCheckIn],
  templateUrl: './upcoming-page.html',
})
export class UpcomingPage {
  eventsService = inject(EventsService);
  usersService = inject(UsersService);

  events = computed(() => this.eventsService.events());
  activeEvent = computed(() => this.eventsService.activeEvent());
  countCheckedIn = computed(() => countCheckedIn(this.activeEvent()!));

  createEvent(name: string) {
    this.eventsService.createEvent(name, dayjs(), this.usersService.getUsers());
  }

  saveEvent() {
    this.eventsService.saveEvent();
  }
}

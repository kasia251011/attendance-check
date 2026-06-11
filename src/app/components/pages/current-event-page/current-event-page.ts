import { Component, computed, inject } from '@angular/core';
import { EventsService } from '../../../services/events/events.service';
import dayjs from 'dayjs';
import { UsersService } from '../../../services/users/users.service';
import { MatButtonModule } from '@angular/material/button';
import { UserCheckIn } from '../../user-check-in/user-check-in';
import { countCheckedIn as fun } from '../../../services/events/events.utils';

@Component({
  selector: 'app-current-event-page',
  imports: [MatButtonModule, UserCheckIn],
  templateUrl: './current-event-page.html',
})
export class CurrentEventPage {
  eventsService = inject(EventsService);
  usersService = inject(UsersService);

  hasEvents = computed(() => this.eventsService.events().length > 0);
  activeEvent = computed(() => this.eventsService.activeEvent());

  countCheckedIn = computed(() => fun(this.activeEvent()!));

  createEvent() {
    this.eventsService.createEvent(dayjs(), this.usersService.getUsers());
  }

  saveEvent() {
    this.eventsService.saveEvent();
  }
}

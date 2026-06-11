import { Component, input } from '@angular/core';
import { EventsService } from '../../services/events/events.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UserEntry } from '../../services/events/events.model';

@Component({
  selector: 'app-user-check-in',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './user-check-in.html',
})
export class UserCheckIn {
  user = input.required<UserEntry>();
  userNo = input.required<number>();

  constructor(private eventsService: EventsService) {}

  checkInUser(userId: string) {
    this.eventsService.checkInOutUser(userId);
  }
}

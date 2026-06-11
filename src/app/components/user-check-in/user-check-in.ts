import { Component, input } from '@angular/core';
import { EventsService } from '../../services/events/events.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UserEntry } from '../../services/events/events.model';

@Component({
  selector: 'app-user-check-in',
  standalone: true,
  imports: [MatSlideToggleModule],
  template: `
    <div
      class="p-4 border-b border-slate-100 cursor-pointer flex justify-between items-center gap-4"
    >
      <div class="flex items-center gap-4">
        <p>{{ userNo() }}</p>
        <p>{{ user().name }}</p>
      </div>
      <mat-slide-toggle (change)="checkInUser(user().id)" [checked]="user().checkedIn" />
    </div>
  `,
})
export class UserCheckIn {
  user = input.required<UserEntry>();
  userNo = input.required<number>();

  constructor(private eventsService: EventsService) {}

  checkInUser(userId: string) {
    this.eventsService.checkInOutUser(userId);
  }
}

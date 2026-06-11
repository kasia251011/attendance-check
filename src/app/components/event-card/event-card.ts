import { Component, computed, input } from '@angular/core';
import { Event } from '../../services/events/events.model';
import { countCheckedIn } from '../../services/events/events.utils';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div
      class="flex flex-col border border-slate-100 rounded-xl p-4 cursor-pointer hover:bg-slate-100"
    >
      <p class="font-medium">Class {{ event().name }}</p>
      <div class="flex items-center gap-2 mt-2">
        <mat-icon fontIcon="calendar_today" class="text-slate-800!" inline />
        <p class="text-slate-800">
          {{ event().date.format('h:mm A') }}
        </p>
      </div>
      <div class="flex items-center gap-2 mt-2">
        <mat-icon fontIcon="person" class="text-slate-800!" inline />
        <p class="text-slate-500">
          {{ attendeesCheckedInCount() }} / {{ event().attendees.length }}
        </p>
      </div>
    </div>
  `,
})
export class EventCard {
  event = input.required<Event>();
  attendeesCheckedInCount = computed(() => countCheckedIn(this.event()));
}

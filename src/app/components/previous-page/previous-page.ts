import { Component, computed, inject } from '@angular/core';
import { EventsService } from '../../services/events/events.service';
import { EventCard } from '../event-card/event-card';

@Component({
  selector: 'app-previous-page',
  imports: [EventCard],
  template: `
    @if (!hasEvents()) {
      <p class="text-slate-500 text-center pt-20">No events yet. Create upcoming to get started!</p>
    }

    @if (hasEvents()) {
      <div class="grid grid-cols-3 gap-4">
        @for (event of events(); track event.id) {
          <app-event-card [event]="event" />
        }
      </div>
    }
  `,
})
export class PreviousPage {
  eventsService = inject(EventsService);
  events = computed(() => this.eventsService.events());
  hasEvents = computed(() => this.events().length > 0);
}

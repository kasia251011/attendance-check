import { Component, computed, inject } from '@angular/core';
import { EventsService } from '../../services/events/events.service';
import { EventCard } from '../event-card/event-card';
import { groupByDate } from '../../services/events/events.utils';

@Component({
  selector: 'app-previous-page',
  imports: [EventCard],
  template: `
    @if (!hasEvents()) {
      <p class="text-slate-500 text-center pt-20">No events yet. Create new one to get started!</p>
    }

    @if (hasEvents()) {
      <div class="grid grid-cols-3 gap-4">
        @for (eventGroup of groupedEvents(); track eventGroup.date) {
          <div class="flex flex-col gap-4">
            <p class="text-slate-500">{{ eventGroup.date.format('dddd, DD MMM YYYY') }}</p>
            @for (event of eventGroup.events; track event.id) {
              <app-event-card [event]="event" />
            }
          </div>
        }
      </div>
    }
  `,
})
export class PreviousPage {
  eventsService = inject(EventsService);
  events = computed(() => this.eventsService.events());
  hasEvents = computed(() => this.events().length > 0);

  groupedEvents = computed(() => groupByDate(this.events()));
}

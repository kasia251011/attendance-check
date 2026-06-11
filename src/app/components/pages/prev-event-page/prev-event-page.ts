import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'app/services/events/events.service';
import { countCheckedIn } from 'app/services/events/events.utils';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UserCheckIn } from 'app/components/user-check-in/user-check-in';

@Component({
  selector: 'app-prev-event-page',
  imports: [UserCheckIn, MatButtonModule, MatIconModule],
  templateUrl: './prev-event-page.html',
})
export class PrevEventPage {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private events = inject(EventsService);

  paramMap = toSignal(this.route.params, { initialValue: null });
  id = computed(() => this.paramMap()?.['id']);

  event = computed(() => this.events.events().find((e) => e.id === this.id()));
  countCheckedIn = computed(() => countCheckedIn(this.event()!));

  navigateToEvents() {
    this.router.navigate(['/previous-events']);
  }
}

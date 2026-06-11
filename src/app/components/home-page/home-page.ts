import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatButtonModule],
  template: ` <div
    class="h-dvh w-full bg-linear-to-t from-[#d7dcf1] to-white p-4 sm:px-10 lg:px-100 flex flex-col"
  >
    <div class="pt-20 flex justify-around">
      <button
        matButton
        [class.text-black!]="!isActive('/current-event')"
        routerLink="/current-event"
      >
        Current Event
      </button>
      <button
        matButton
        [class.text-black!]="!isActive('/previous-events')"
        routerLink="/previous-events"
      >
        Previous
      </button>
    </div>
    <div class="bg-white h-full rounded-3xl p-8 pt-0 mt-4 overflow-auto scrollbar-none">
      <router-outlet />
    </div>
  </div>`,
})
export class HomePage {
  private router = inject(Router);

  isActive(path: string) {
    return this.router.url.includes(path);
  }
}

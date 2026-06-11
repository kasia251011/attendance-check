import dayjs, { Dayjs } from 'dayjs';
import { User } from '../users/users.model';
import { Event } from './events.model';
import { v4 as uuid } from 'uuid';
import { computed, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EventsService {
  private _events = signal<Event[]>([]);
  private _activeEvent = signal<Event | null>(null);

  readonly events = this._events.asReadonly();
  readonly activeEvent = this._activeEvent.asReadonly();

  getEvent(id: string): Event | undefined {
    return this.events().find((list) => list.id === id);
  }

  createEvent(name: string, date: Dayjs, users: User[]): void {
    const newEvent: Event = {
      id: uuid(),
      name,
      date,
      active: true,
      attendees: users.map((user) => ({ ...user, checkedIn: false })),
    };
    this._activeEvent.set(newEvent);
  }

  saveEvent(): void {
    this._events.update((events) => [...events, this._activeEvent()!]);
    this._activeEvent.set(null);
  }

  checkInOutUser(userId: string): void {
    if (this._activeEvent()) {
      const attendees = this._activeEvent()!.attendees;
      const userEntry = attendees.find((attendee) => attendee.id === userId);
      if (userEntry) {
        userEntry.checkedIn = !userEntry.checkedIn;
      }
    }
  }
}

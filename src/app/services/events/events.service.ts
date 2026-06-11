import dayjs, { Dayjs } from 'dayjs';
import { User } from '../users/users.model';
import { Event } from './events.model';
import { v4 as uuid } from 'uuid';
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EventsService {
  events = signal<Event[]>([]);
  activeEvent = signal<Event | null>(null);

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
    this.activeEvent.set(newEvent);
  }

  saveEvent(): void {
    this.events.update((events) => [...events, this.activeEvent()!]);
    this.activeEvent.set(null);
  }

  checkInOutUser(userId: string): void {
    if (this.activeEvent()) {
      const attendees = this.activeEvent()!.attendees;
      const userEntry = attendees.find((attendee) => attendee.id === userId);
      if (userEntry) {
        userEntry.checkedIn = !userEntry.checkedIn;
      }
    }
  }
}

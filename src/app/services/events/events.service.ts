import dayjs, { Dayjs } from 'dayjs';
import { User } from '../users/users.model';
import { Event } from './events.model';
import { v4 as uuid } from 'uuid';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EventsService {
  private events: Event[] = [];
  private activeEvent: Event | null = null;

  getEvents(): Event[] {
    return this.events;
  }

  getEvent(id: string): Event | undefined {
    return this.events.find((list) => list.id === id);
  }

  getActiveEvent() {
    return this.activeEvent;
  }

  createEvent(name: string, date: Dayjs, users: User[]): void {
    const newEvent: Event = {
      id: uuid(),
      name,
      date,
      active: true,
      attendees: users.map((user) => ({ ...user, checkedIn: false })),
    };
    this.activeEvent = newEvent;
  }

  saveEvent(id: string): void {
    this.events.push(this.activeEvent!);
    this.activeEvent = null;
  }

  checkInOutUser(userId: string): void {
    if (this.activeEvent) {
      const attendees = this.activeEvent.attendees;
      const userEntry = attendees.find((attendee) => attendee.id === userId);
      if (userEntry) {
        userEntry.checkedIn = !userEntry.checkedIn;
      }
    }
  }
}

import dayjs, { Dayjs } from 'dayjs';
import { User } from '../users/users.model';
import { Event } from './events.model';
import { v4 as uuid } from 'uuid';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EventsService {
  private events: Event[] = [];

  getEvents(): Event[] {
    return this.events;
  }

  getEvent(id: string): Event | undefined {
    return this.events.find((list) => list.id === id);
  }

  getActiveEvent() {
    return this.events.find((list) => list.active);
  }

  createEvent(name: string, date: Dayjs, users: User[]): void {
    const newList: Event = {
      id: uuid(),
      name,
      date,
      active: true,
      attendees: users.map((user) => ({ ...user, checkedIn: false })),
    };
    this.events.push(newList);
  }

  saveEvent(id: string): void {
    const event = this.events.find((list) => list.id === id);
    if (event) {
      event.active = false;
    }
  }

  checkInUser(eventId: string, userId: string): void {
    const event = this.events.find((list) => list.id === eventId);
    if (event) {
      const userEntry = event.attendees.find((attendee) => attendee.id === userId);
      if (userEntry) {
        userEntry.checkedIn = true;
      }
    }
  }

  checkOutUser(eventId: string, userId: string): void {
    const event = this.events.find((list) => list.id === eventId);
    if (event) {
      const userEntry = event.attendees.find((attendee) => attendee.id === userId);
      if (userEntry) {
        userEntry.checkedIn = false;
      }
    }
  }
}

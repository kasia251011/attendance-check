import { Event } from './events.model';

export const countCheckedIn = (event: Event) => {
  return event.attendees.filter((u: any) => u.checkedIn).length;
};

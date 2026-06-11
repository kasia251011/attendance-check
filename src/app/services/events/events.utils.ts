import dayjs from 'dayjs';
import { Event } from './events.model';

export const countCheckedIn = (event: Event) => {
  return event.attendees.filter((u) => u.checkedIn).length;
};

export const groupByDate = (events: Event[]) => {
  const grouped: Record<string, Event[]> = {
    ...events.reduce(
      (acc, event) => {
        const key = event.date.format('YYYY-MM-DD');
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(event);

        return acc;
      },
      {} as Record<string, Event[]>,
    ),
  };

  return Object.entries(grouped)
    .sort(([dateA], [dateB]) => dayjs(dateB).diff(dayjs(dateA)))
    .map(([date, events]) => ({
      date: dayjs(date),
      events: events.sort((a, b) => b.date.diff(a.date)),
    }));
};

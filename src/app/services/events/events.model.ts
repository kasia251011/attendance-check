import { User } from '../users/users.model';
import { Dayjs } from 'dayjs';

export interface Event {
  id: string;
  name: string;
  date: Dayjs;
  active: boolean;
  attendees: UserEntry[];
}

export interface UserEntry extends User {
  checkedIn: boolean;
}

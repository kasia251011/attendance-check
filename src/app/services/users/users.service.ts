import { Injectable } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { User } from './users.model';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private users = DUMMY_USERS;

  getUsers() {
    return this.users;
  }

  addUser(user: Omit<User, 'id'>) {
    this.users.push({ ...user, id: uuid() });
  }

  removeUser(id: string) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  updateUser(id: string, updatedUser: Omit<User, 'id'>) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...updatedUser, id };
    }
  }
}

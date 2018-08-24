import {Injectable} from '@angular/core';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: true,
        balance: 100,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'karen@gmail.com',
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: false,
        balance: 200,
        registered: new Date('01/10/2018 11:47:00'),
        hide: false
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@example.com',
        image: 'http://lorempixel.com/600/600/people/2',
        isActive: true,
        balance: 148,
        registered: new Date('11/25/2018 08:59:00'),
        hide: true
      }
    ];
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    this.users.unshift(user);
  }
}

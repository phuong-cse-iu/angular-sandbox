import {Injectable} from '@angular/core';
import {User} from '../models/User';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

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

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User): void {
    this.users.unshift(user);
  }
}

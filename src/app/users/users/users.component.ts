import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA'
        }
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 36,
        address: {
          street: '55 Mill st',
          city: 'Miami',
          state: 'MA'
        }
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 24,
        address: {
          street: '20 School st',
          city: 'Lynn',
          state: 'MA'
        }
      },
    ];
  }

  addUser(user: User) {
    this.users.push(user);
  }
}

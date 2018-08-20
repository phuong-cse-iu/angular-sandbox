import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended = true;
  loaded = false;
  enableAdd = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
          },
          image: 'http://lorempixel.com/600/600/people/3'
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 36,
          address: {
            street: '55 Mill st',
            city: 'Miami',
            state: 'MA'
          },
          image: 'http://lorempixel.com/600/600/people/1'
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 24,
          address: {
            street: '20 School st',
            city: 'Lynn',
            state: 'MA'
          },
          image: 'http://lorempixel.com/600/600/people/2'
        },
      ];
      this.loaded = true;
    }, 2000);
    this.showExtended = true;
  }
}

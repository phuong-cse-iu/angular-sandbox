import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }
  };
  users: User[];
  showExtended = true;
  loaded = false;
  enableAdd = false;
  currentClasses = {};
  currentStyles = {};
  showUserForm: false;

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
          image: 'http://lorempixel.com/600/600/people/3',
          isActive: true,
          balance: 100,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
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
          image: 'http://lorempixel.com/600/600/people/1',
          isActive: false,
          balance: 200,
          registered: new Date('01/10/2018 11:47:00'),
          hide: false
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
          image: 'http://lorempixel.com/600/600/people/2',
          isActive: true,
          balance: 148,
          registered: new Date('11/25/2018 08:59:00'),
          hide: true
        }
      ];
      this.loaded = true;
    }, 2000);
    // this.showExtended = true;
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    };
  }

  fireEvent(e) {
    console.log(e.target.value);
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: ''
      }
    };
  }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('Submit');
  }
}

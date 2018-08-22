import {Component, OnInit, ViewChild} from '@angular/core';
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
    email: ''
  };
  users: User[];
  showExtended = true;
  loaded = false;
  enableAdd = false;
  currentClasses = {};
  currentStyles = {};
  showUserForm: false;
  @ViewChild('userForm') form: any;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
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
      this.loaded = true;
    }, 2000);
    // this.showExtended = true;
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.form.get('userLastName') && this.form.get('userFirstName') && this.form.get('userEmail'),
      'big-text': this.showExtended
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    };
  }

  onSubmit({value, valid}: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);

      this.form.reset();
    }
  }
}

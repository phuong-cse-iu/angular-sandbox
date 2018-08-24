import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../models/User';
import {DataService} from '../../services/data.service';

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

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.users = this.dataService.getUsers();
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
      this.dataService.addUser(value);

      this.form.reset();
    }
  }
}

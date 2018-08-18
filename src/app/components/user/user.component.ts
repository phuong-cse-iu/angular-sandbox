import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css']
})

export class UserComponent {
  firstName = 'John';
  lastName = 'Smith';
  age = 24;
  address = {
    street: 'Doan Van Bo',
    city: 'Saigon',
    state: 'Gia Dinh'
  };

  constructor() {
    this.sayHello();
  }

  sayHello() {
    console.log(`Hello ${this.firstName}, ${this.lastName}`);
  }

  showAge() {
    return this.age;
  }
}

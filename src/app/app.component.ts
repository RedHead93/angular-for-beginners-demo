import { Component } from '@angular/core';
import { User } from './model/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public users: User[];

  constructor() {

    this.users = [
      {
        id: 1,
        name: 'Giulia',
        age: 16,
        gender: 'F',
        city: 'Rome',
        birthday: 1611955740000,
        bitcoins: 3.7483918
      },
      {
        id: 2,
        name: 'Fabio',
        age: 50,
        gender: 'M',
        city: 'Rome',
        birthday: 1611955740000,
        bitcoins: 3.7483918
      },
      {
        id: 3,
        name: 'Marco',
        age: 24,
        gender: 'M',
        city: 'Rome',
        birthday: 1611955740000,
        bitcoins: 3.7483918
      },
      {
        id: 4,
        name: 'Mirko',
        age: 22,
        gender: 'M',
        city: 'Rome',
        birthday: 1611955740000,
        bitcoins: 3.7483918
      }
    ];
  }
}

import { Component } from '@angular/core';
import { User } from './model/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .user{
    border: 1px dashed gainsboro;
    border-radius: 4px;
    padding: 10px;
    margin-top: 5px;
    position: relative;
  }

  .id{
    border-radius: 50%;
    background: gainsboro;
    position: absolute;
    right: 10px;
    top: 23px;
    height:20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    z-index: 1;
  }

  .name{
    display: block;
    margin-bottom: 10px;
    border-bottom: 1px solid whitesmoke;
    width: 100%;
    font-size: 20px;
  }

  .male{
    background: blue;
    color: white
  }

  .female{
    background: pink;
  }

  img {
    width: 100%
  }
  `]
})

export class AppComponent {

  public users: User[];
  public zoom: number = 10;

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

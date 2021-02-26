import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent {
  public users: User[];
  public selectedUser: User;
  public error: boolean;

  constructor(
    private http: HttpClient,
    private router: Router
    ) {
    this.http.get<User[]>('http://localhost:3000/users')
      .subscribe(res => {
        this.users = res;
      })
  }

  selectUser(user: User): void {
    if (this.selectedUser && this.selectedUser.id === user.id) {
      this.selectedUser = null;
    } else {
      this.selectedUser = user;
    }
  }

  formSubmit(form: NgForm): void {
    if (this.selectedUser?.id) {
      this.edit(form);
    } else {
      this.add(form);
    }
  }

  add(form: NgForm): void {
    this.http.post<User>(`http://localhost:3000/users`, form.value)
      .subscribe(res => {
        this.users.unshift(res);
        form.reset();
      })
  }

  edit(form: NgForm): void {
    this.error = false;

    this.http.patch<User>(`http://localhost:3000/users/${this.selectedUser.id}`, form.value)
      .subscribe(

        // esempio di next
        (res) => {
          this.users = this.users.map(u => {
            return u.id === this.selectedUser.id ? res : u
          })
        },

        // esempio di errore
        (error) => {
          this.error = true;
        }

      )
  }

  delete(userId: number): void {
    this.http.delete(`http://localhost:3000/users/${userId}`)
      .subscribe(() => {
        this.users = this.users.filter(user => user.id !== userId);
      })
  }

  openDetail(userId: number): void{
    this.router.navigateByUrl(`/users/${userId}`);
  }
}
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public user: User;

  constructor(
    public activatedRoute: ActivatedRoute,
    public httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.httpClient.get<User>(`http://localhost:3000/users/${id}`)
      .subscribe(res => {
        this.user = res;
      })
  }

}

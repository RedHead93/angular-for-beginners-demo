import { Component } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
    private router: Router
  ) {
    this.router.events
      .pipe(
        filter(evt => evt instanceof NavigationEnd),
        map((evt: NavigationEnd) => evt.url)
      )
      .subscribe((url: string) => {
        console.log(url)
      })
  } 

}
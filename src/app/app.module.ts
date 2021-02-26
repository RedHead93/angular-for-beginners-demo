import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './features/users/users.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './features/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomepageComponent,
    ContactsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomepageComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/:id', component: UserDetailsComponent },
      { path: '**', redirectTo: 'home'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

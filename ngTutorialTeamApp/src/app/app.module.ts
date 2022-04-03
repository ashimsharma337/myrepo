import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {User2Module} from "./user2/user2.module";



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    User2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

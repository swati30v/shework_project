import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { ShowUserDetaiilsComponent } from './user-list/show-user-detaiils/show-user-detaiils.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ShowUserDetaiilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

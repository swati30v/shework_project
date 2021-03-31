import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowUserDetaiilsComponent } from './user-list/show-user-detaiils/show-user-detaiils.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: UserListComponent},
  {path: 'candidate/:id', component: ShowUserDetaiilsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

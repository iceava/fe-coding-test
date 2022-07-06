import { UserDetailsService } from './components/users/user-details/user-details.service';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './components/users/users.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home', component: HomeComponent
  },  

  { 
    path: "users", component: UsersComponent,
  },
  {
    path: 'users/details', component: UserDetailsComponent, resolve :{
      details: UserDetailsService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}

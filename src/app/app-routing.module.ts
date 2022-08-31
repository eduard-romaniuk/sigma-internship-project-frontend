import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {RegistrationPageComponent} from "./pages/registration-page/registration-page.component";
import {NotFoundPageComponent} from "./pages/not-found-page/not-found-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {PersonalProfilePageComponent} from "./pages/personal-profile-page/personal-profile-page.component";
import {FundsListPageComponent} from "./pages/funds-list-page/funds-list-page.component";
import {UsersListPageComponent} from "./pages/users-list-page/users-list-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'registration', component: RegistrationPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'profile', component: PersonalProfilePageComponent},
  {path: 'profile/funds-list', component: FundsListPageComponent},
  {path: 'profile/users-list', component: UsersListPageComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

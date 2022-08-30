import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReactiveFormsModule } from "@angular/forms";
import { PersonalProfilePageComponent } from './pages/personal-profile-page/personal-profile-page.component';
import { FundsListPageComponent } from './pages/funds-list-page/funds-list-page.component';
import { UsersListPageComponent } from './pages/users-list-page/users-list-page.component';
import { FundCollectionComponent } from './components/fund-collection/fund-collection.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegistrationPageComponent,
    NotFoundPageComponent,
    MenuComponent,
    LoginPageComponent,
    PersonalProfilePageComponent,
    FundsListPageComponent,
    UsersListPageComponent,
    FundCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

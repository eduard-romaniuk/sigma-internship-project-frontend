import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {RegistrationPageComponent} from './pages/registration-page/registration-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {MenuComponent} from './components/menu/menu.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PersonalProfilePageComponent} from './pages/personal-profile-page/personal-profile-page.component';
import {FundsListPageComponent} from './pages/funds-list-page/funds-list-page.component';
import {UsersListPageComponent} from './pages/users-list-page/users-list-page.component';
import {FundCollectionComponent} from './components/fund-collection/fund-collection.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {
  LatestStatisticDataCardComponent
} from './components/latest-statistic-data-card/latest-statistic-data-card.component';
import {MathStatisticDataCardComponent} from './components/math-statistic-data-card/math-statistic-data-card.component';
import {NgChartsModule} from 'ng2-charts';
import {HttpInterceptorService} from './services/httpInterceptor.service';
import {FooterComponent} from './components/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EditDialogComponent} from './components/dialogs/edit-dialog/edit-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {AddFundDialogComponent} from './components/dialogs/add-funf-dialog/add-fund-dialog.component';

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
    FundCollectionComponent,
    LatestStatisticDataCardComponent,
    MathStatisticDataCardComponent,
    FooterComponent,
    EditDialogComponent,
    AddFundDialogComponent,
  ],
  entryComponents: [ EditDialogComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

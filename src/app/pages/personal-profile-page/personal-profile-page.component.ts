import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/enums/role';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-personal-profile-page',
  templateUrl: './personal-profile-page.component.html',
  styleUrls: ['./personal-profile-page.component.scss']
})
export class PersonalProfilePageComponent implements OnInit {

  email: String = "{}"
  username: String = "{}"
  locale: String = "{}"
  subscription: String = "{}"
  role: String = "{}"

  showAdminBtns = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.email = this.authService.getLoggedInUserName();
    this.username = this.authService.getCurrentUserName();
    this.locale = this.authService.getCurrentUserLocale();
    this.subscription = this.authService.getCurrentUserSubscription();
    this.role = this.authService.getCurrentUserRole();
    this.showAdminBtns = this.authService.getCurrentUserRole() == Role.ADMIN;
  }
}

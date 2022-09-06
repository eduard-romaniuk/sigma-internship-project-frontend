import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-personal-profile-page',
  templateUrl: './personal-profile-page.component.html',
  styleUrls: ['./personal-profile-page.component.scss']
})
export class PersonalProfilePageComponent implements OnInit {

  email: String = "{}"

  constructor(private authService: AuthService) {
    console.log(authService.getCurrentUser()?.name)
  }

  ngOnInit(): void {
    this.email = this.authService.getLoggedInUserName()
    console.log(this.authService.getCurrentUser()?.name)
  }

}

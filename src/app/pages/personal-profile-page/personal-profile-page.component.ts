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

  showAdminBtns = false;
  
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.email = this.authService.getLoggedInUserName();
    if(this.authService.getCurrentUserRole() == Role.ADMIN) {
      this.showAdminBtns = true;
    } else {
      this.showAdminBtns = false;
    }
  }
}

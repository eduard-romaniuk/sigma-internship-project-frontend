import { Component, OnInit } from '@angular/core';
import { EndUser } from 'src/app/models/EndUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list-page',
  templateUrl: './users-list-page.component.html',
  styleUrls: ['./users-list-page.component.scss']
})
export class UsersListPageComponent implements OnInit {

  endUsers: EndUser[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getEndUsers().subscribe(data => {
      this.endUsers = data;
    })
  }

  delete(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
        window.location.reload();
      },
      () => {});
  }
}

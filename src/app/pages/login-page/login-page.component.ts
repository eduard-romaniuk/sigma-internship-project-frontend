import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  errorMessage = 'Invalid Credentials';

  loginFailure = false;
  myForm: FormGroup

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) {
    this.myForm = new FormGroup({
      "userEmail": new FormControl('', [Validators.required, Validators.email]),
      "userPassword": new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  submit() {
    let login = this.myForm.controls["userEmail"].value
    let password = this.myForm.controls["userPassword"].value
    this.authenticationService.authenticationService(
      login, password).subscribe((result) => {
      this.loginFailure = false;
      this.router.navigate(['']).then(() => {
        window.location.reload();
      });
    }, () => {
      this.loginFailure = true;
    });
  }

}

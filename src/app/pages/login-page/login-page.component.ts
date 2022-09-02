import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  loginSuccess = false;
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
    this.authenticationService.authenticationService(this.myForm.controls["userEmail"].value,
                              this.myForm.controls["userPassword"].value).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.router.navigate(['']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }

}

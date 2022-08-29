import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  myForm: FormGroup

  constructor() {
    this.myForm = new FormGroup({
      "userEmail": new FormControl('', [Validators.required, Validators.email]),
      "userPassword": new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.myForm);
  }

}

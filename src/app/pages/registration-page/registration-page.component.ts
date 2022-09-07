import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RegistrationService} from "../../services/registration.service";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  myForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private registrationService: RegistrationService) {
    this.myForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required, ),
    }, {  validators: this.passwordMatch(
      'userPassword', 'confirmPassword') })
  }

  ngOnInit(): void {
  }

  passwordMatch(userPassword: string, confirmPassword: string): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: any } | null => {
      const passwordControl = formGroup.get(userPassword);
      const confirmPasswordControl = formGroup.get(confirmPassword);

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['mustMatch']
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({mustMatch: true});
        return {mustMatch: true}
      } else {
        confirmPasswordControl.setErrors(null);
        return null;
      }
    };
  }

  submit() {
    this.registrationService.signUp(this.myForm.controls["userName"].value,
      this.myForm.controls["userEmail"].value,
      this.myForm.controls["userPassword"].value).subscribe(() => {},
      () => {});
      this.router.navigate(['']).then(() => {
        window.location.reload();
      });
  }

}

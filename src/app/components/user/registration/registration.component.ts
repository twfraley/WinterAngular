import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.html']
})
export class RegistrationComponent implements OnInit {

  private _registerForm: FormGroup;
  private _email: FormControl;
  private _password: FormControl;
  private _confirmPassword: FormControl;

  constructor(private _form: FormBuilder, private _authService: AuthService) {
  }

  ngOnInit() {
    this._email = new FormControl('', Validators.required);
    this._password = new FormControl( '', [ Validators.required, Validators.minLength(4) ]);
    this._confirmPassword = new FormControl('', Validators.required);
    this.createForm();
  }

  fieldIsNotProvided() {
    return this._password.touched && this._password.hasError('required');
  }

  fieldIsTooShort() {
    return this._password.touched && this._password.hasError('minlength(4)');
  }

  passwordsDoNotMatch() {
    return this._confirmPassword.touched && (this._confirmPassword.value != this._password.value);
  }

  createForm() {
    this._registerForm = this._form.group({
      email: this._email,
      password: this._password,
      confirmPassword: this._confirmPassword
    });
  }

  onSubmit() {
    console.log(this._registerForm.value);
    this._authService.register(this._registerForm.value)
    .subscribe( () => this._authService.login(this._registerForm.value));
  }
}

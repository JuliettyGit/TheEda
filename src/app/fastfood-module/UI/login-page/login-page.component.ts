import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from "./MyErrorStateMatcher";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  hide = true;

  constructor() { }

  ngOnInit(): void {}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);

  matcher = new MyErrorStateMatcher();

  onSubmit()
  {
  }
}

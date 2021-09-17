import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { MyErrorStateMatcher } from "../login-page/login-page.component";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
}

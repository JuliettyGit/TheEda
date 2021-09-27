import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { AdminListService } from "../../../shared/services/admin-list.service";
import { UserListService } from "../../../shared/services/user-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  hide = true;
  userName!: string;
  userEmail!: string;
  password!: string;
  secondPasswordEnter!: string;
  checked: boolean = false;

  constructor( private adminListService: AdminListService,
               private userListService: UserListService,
               private router: Router ) { }

  ngOnInit(): void {}

  nameFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  secondPasswordFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  onSubmit(name: string, email: string, password: string, secondPasswordEnter: string, isAdmin: boolean)
  {
    if(password == secondPasswordEnter)
    {
      this.signUp(name, email, password, isAdmin)
    }
  }

  signUp(name: string, email: string, password: string, isAdmin: boolean)
  {
    if(isAdmin)
    {
      this.adminListService.addNewAdmin(name, email, password)
        .subscribe(() => {
          this.router.navigate(['login']);
        });
    }
    else
    {
      this.userListService.addNewUser(name, email, password)
        .subscribe(() => {
          this.router.navigate(['/login']);
        })
    }
  }
}

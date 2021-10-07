import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { Store } from "@ngrx/store";

import { AdminListService } from "../../../shared/services/admin-list.service";
import { UserListService } from "../../../shared/services/user-list.service";
import { IUser } from "../../../shared/Interfaces/IUser";
import { AlertModalComponent } from "../../../shared/modals/alert-modal/alert-modal.component";
import { IUserState } from "../../../shared/Interfaces/IUserState";
import { LogIn } from "../../../shared/store/actions/userActions";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  usersList: Array<IUser> = [];
  adminsList: Array<IUser> = [];
  userEmail!: string;
  password!: string;
  hide = true;
  checked!: boolean;

  constructor( private adminListService: AdminListService,
               private userListService: UserListService,
               private router: Router,
               public dialog: MatDialog,
               private store$: Store<IUserState>) { }

  ngOnInit(): void
  {
    this.adminListService.getAdminsList()
      .subscribe((admins: IUser[]) => {
        this.adminsList = admins;
      });

    this.userListService.getUsersList()
      .subscribe((users: IUser[]) => {
        this.usersList = users;
      });
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);

  onSubmit(enteredEmail: string , password: string, checked: boolean)
  {
    if(checked)
    {
      this.loginAsAdmin(enteredEmail, password)
    }
    else
    {
      this.loginAsUser(enteredEmail, password)
    }
  }

  loginAsAdmin(email: string, password: string)
  {
    if(this.adminsList.some((el) =>
      el.email === email && el.password === password))
    {
      this.router.navigate(['/admin']);
      this.store$.dispatch(new LogIn(true));
    }
    else if(this.adminsList.some((el) =>
      el.email === email && el.password !== password))
    {
      const alertText = "Wrong password";
      this.openAlertDialog(alertText);
    }
    else
    {
      const alertText = "This admin does not exist";
      this.openAlertDialog(alertText);
    }
  }

  loginAsUser(email: string, password: string)
  {
    if(this.usersList.some((el) =>
      el.email === email && el.password === password))
    {
     this.router.navigate(['/TheEda']);
     this.store$.dispatch(new LogIn(true));
    }
    else if(this.usersList.some((el) =>
      el.email === email && el.password !== password))
    {
      const alertText = "Wrong password";
      this.openAlertDialog(alertText);
    }
    else
    {
      const alertText = "This user does not exist";
      this.openAlertDialog(alertText);
    }
  }

  openAlertDialog(alertText: string): void
  {
    this.dialog.open(AlertModalComponent, {
      data: alertText
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";

import { AdminListService } from "../../../shared/services/admin-list.service";
import { UserListService } from "../../../shared/services/user-list.service";
import { IUser } from "../../../shared/Interfaces/IUser";
import { AlertModalComponent } from "../../../shared/modals/alert-modal/alert-modal.component";

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
  usersList: Array<IUser> = [];
  adminsList: Array<IUser> = [];
  constructor( private adminListService: AdminListService,
               private userListService: UserListService,
               private router: Router,
               public dialog: MatDialog  ) { }

  ngOnInit()
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

  nameFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  secondPasswordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
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
      if(!this.adminsList.some((el) =>
        el.email === email))
      {
        this.adminListService.addNewAdmin(name, email, password)
          .subscribe(() => {
            this.router.navigate(['login']);
          });
      }
      else
      {
        const alertText = "This admin has already exist";
        this.openAlertDialog(alertText);
      }

    }
    else
    {
      if(!this.usersList.some((el) =>
        el.email === email))
      {
        this.userListService.addNewUser(name, email, password)
          .subscribe(() => {
            this.router.navigate(['/login']);
          })
      }
      else
      {
        const alertText = "This user has already exist";
        this.openAlertDialog(alertText);
      }
    }
  }

  openAlertDialog(alertText: string): void
  {
    this.dialog.open(AlertModalComponent, {
      data: alertText
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule}  from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MainPageViewComponent } from './widget/main-page-view/main-page-view.component';
import { CategoriesPagesComponent } from './UI/categories-pages/categories-pages.component';
import { SharedModule } from "../shared/shared.module";
import { LoginPageComponent } from "./UI/login-page/login-page.component";
import { RegisterPageComponent } from './UI/register-page/register-page.component';
import { AppRoutingModule } from "../app-routing.module";
import { DishInfoDialogComponent } from './UI/modal-dialogs/dish-info-dialog/dish-info-dialog.component';
import { OrderPageComponent } from './UI/order-page/order-page.component';
import { DishCategoriesService } from "../shared/services/dish-categories.service";
import { DishListService } from "../shared/services/dish-list.service";

@NgModule({
    declarations: [
      MainPageViewComponent,
      CategoriesPagesComponent,
      LoginPageComponent,
      RegisterPageComponent,
      DishInfoDialogComponent,
      OrderPageComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    MatTabsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCheckboxModule,
    FormsModule,
    MatChipsModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  exports: [
    MainPageViewComponent,
    LoginPageComponent
  ],
  providers:[
    DishCategoriesService,
    DishListService
  ]
})
export class FastFoodModule { }

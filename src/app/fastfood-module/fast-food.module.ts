import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageViewComponent } from './widget/main-page-view/main-page-view.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { CategoriesPagesComponent } from './UI/categories-pages/categories-pages.component';
import { MatCardModule}  from "@angular/material/card";
import { SharedModule } from "../shared/shared.module";
import { LoginPageComponent } from "./UI/login-page/login-page.component";
import { RegisterPageComponent } from './UI/register-page/register-page.component';
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { StoreModule } from "@ngrx/store";
import { APP_REDUCER_NODE, mainReducer } from "./store/reducers/reducer";
import { DishInfoDialogComponent } from './UI/modal-dialogs/dish-info-dialog/dish-info-dialog.component';
import { MatTooltipModule } from "@angular/material/tooltip";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
    declarations: [
      MainPageViewComponent,
      CategoriesPagesComponent,
      LoginPageComponent,
      RegisterPageComponent,
      DishInfoDialogComponent
    ],
  exports: [
    MainPageViewComponent,
    LoginPageComponent
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
    StoreModule.forFeature(APP_REDUCER_NODE, mainReducer),
    MatTooltipModule,
    MatDialogModule
  ]
})
export class FastFoodModule { }

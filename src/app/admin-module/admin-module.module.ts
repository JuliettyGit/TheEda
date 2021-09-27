import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule} from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";

import { AdminPageComponent } from "./admin-page/admin-page.component";
import { WidgetComponent } from './widget/widget.component';
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";
import { AddDishModalComponent } from './modals/add-dish-modal/add-dish-modal.component';
import { DishCategoriesService } from "../shared/services/dish-categories.service";
import { DishListService } from "../shared/services/dish-list.service";


@NgModule({
  declarations: [
    WidgetComponent,
    AdminPageComponent,
    AddDishModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    MatOptionModule,
    MatChipsModule,
    MatIconModule,
  ],
  exports: [
    WidgetComponent
  ],
  providers:[
    DishCategoriesService,
    DishListService
  ]
})
export class AdminModuleModule { }

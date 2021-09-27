import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from "@angular/material/badge";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";

import { HeaderComponent } from "./layouts/header/header.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AppRoutingModule } from "../app-routing.module";
import { SiteLayoutComponent } from "./layouts/site-layout/site-layout.component";
import { AlertModalComponent } from './modals/alert-modal/alert-modal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    AlertModalComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    MatBadgeModule,
    FormsModule,
    MatDialogModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule {}

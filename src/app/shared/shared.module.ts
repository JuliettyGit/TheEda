import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
  declarations: [
    HeaderComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule {}

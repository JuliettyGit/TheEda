import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./layouts/header/header.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { AppRoutingModule } from "../app-routing.module";
import { SiteLayoutComponent } from "./layouts/site-layout/site-layout.component";



@NgModule({
  declarations: [
    HeaderComponent,
    AuthLayoutComponent,
    SiteLayoutComponent
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

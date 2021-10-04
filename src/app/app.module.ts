import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FastFoodModule } from "./fastfood-module/fast-food.module";
import { SharedModule } from "./shared/shared.module";
import { environment } from '../environments/environment';
import { AdminModuleModule } from "./admin-module/admin-module.module";
import { ODER_REDUCER_NODE, orderReducer } from "./shared/store/reducers/orderReducer";
import { OrderListService } from "./shared/services/order-list.service";
import { userReducer, USER_REDUCER_NODE } from "./shared/store/reducers/userReducer";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FastFoodModule,
    SharedModule,
    AdminModuleModule,
    HttpClientModule,
    StoreModule.forFeature(ODER_REDUCER_NODE, orderReducer),
    StoreModule.forFeature(USER_REDUCER_NODE, userReducer),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
      OrderListService
    ],
  bootstrap: [
      AppComponent
    ]
})
export class AppModule { }

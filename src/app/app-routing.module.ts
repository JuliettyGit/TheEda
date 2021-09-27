import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageViewComponent} from "./fastfood-module/widget/main-page-view/main-page-view.component";
import {LoginPageComponent} from "./fastfood-module/UI/login-page/login-page.component";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component";
import {RegisterPageComponent} from "./fastfood-module/UI/register-page/register-page.component";
import {WidgetComponent} from "./admin-module/widget/widget.component";
import {OrderPageComponent} from "./fastfood-module/UI/order-page/order-page.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent,
    children: [{path: '', redirectTo: '/TheEda', pathMatch: 'full'},
      {path: '*', redirectTo: '/TheEda'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}]
  },
  {
    path: '', component: SiteLayoutComponent,
    children: [{path: '', redirectTo: '/TheEda', pathMatch: 'full'},
      {path: '*', redirectTo: '/TheEda'},
      {path: 'TheEda', component: MainPageViewComponent},
      {path: 'admin', component: WidgetComponent, canActivate: [AuthGuard]},
      {path: 'order', component: OrderPageComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

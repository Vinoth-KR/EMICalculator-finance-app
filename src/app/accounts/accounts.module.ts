import { NgModule } from "@angular/core";
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AppRoutingModule } from "../app-routing.module";
import { SingUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    ForgotPasswordComponent,
    SingUpComponent
  ],
  imports:[AppRoutingModule, FormsModule, CommonModule, HttpClientModule, RouterModule],
  exports:[HomeComponent]
})
export class AccountsModule{

}
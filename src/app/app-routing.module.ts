import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './accounts/components/forgot-password/forgot-password.component';
import { HomeComponent } from './accounts/components/home/home.component';
import { LoginComponent } from './accounts/components/login/login.component';
import { SingUpComponent } from './accounts/components/sign-up/sign-up.component';

const routes: Routes = [{path:"", redirectTo:"home", pathMatch:'full'},
{path:"home", component:HomeComponent, children:[
  {path:"login", component:LoginComponent},
  {path:"signup", component:SingUpComponent},
  {path:"fp", component:ForgotPasswordComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

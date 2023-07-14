import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { NRoutingModule } from './n-routing.module';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    NRoutingModule,
    SharedModule,
    CommonModule,
  ],exports:[
    LoginComponent,
    HomeComponent,

  ]
})
export class PagesModule { }
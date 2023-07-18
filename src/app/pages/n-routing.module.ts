import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
      {path:'',redirectTo:'home'},
      {path:'login',component:LoginComponent},
      {path:'home',component:HomeComponent},
      {path:'signup',component:SignupComponent},
      {path:'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NRoutingModule { }

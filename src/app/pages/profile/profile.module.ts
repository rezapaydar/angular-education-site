import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileRoutingModule } from './profileRouting.module';
import { ProfileComponent } from './profile.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [
    ProfileComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule,
  ],
  exports:[

  ]
})
export class ProfileModule { }

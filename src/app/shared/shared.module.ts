import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalService } from './services/modal.services';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],exports:[
    CommonModule,
    SwiperModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],providers:[
    ModalService,
    ModalComponent
  ]
})
export class SharedModule { }

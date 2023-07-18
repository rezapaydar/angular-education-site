import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalService } from './services/modal.services';
import { ModalComponent } from './modal/modal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GeneralsVarService } from './services/generals-var.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
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
    HeaderComponent,
    FooterComponent,
    ModalComponent,
  ],providers:[
    ModalService,
    GeneralsVarService
  ]
})
export class SharedModule { }

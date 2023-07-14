import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import SwiperCore , {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  EffectCoverflow
} from 'swiper';
import { BehaviorSubject, filter, timeout } from "rxjs";
import Swiper from "swiper/types/swiper-class";
import { environment } from "../../../environments/environment.prod";
import { DomSanitizer } from '@angular/platform-browser';
import { Buffer } from 'buffer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalService } from '../../shared/services/modal.services';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';



SwiperCore.use([
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'educationWebsite';
  image:any;
  imgs:any;
  datas:any=[];
  generals:any=[];
  topteachers:any=[];
  topcourses:any=[]
  studentreview:any=[]
  isLogin:boolean=false;
  isNotLogin:boolean=false;
  isDisplayed:string='flex';
  isNotDisplayed:string='flex';
  env = environment;
  formData : FormGroup = new FormGroup({
    fullname: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    telephone: new FormControl('',[Validators.required]),
    message: new FormControl('',Validators.required),
  });
  constructor(private http:HttpClient,public modalService: ModalService,private Router:Router,private Route:ActivatedRoute){}

  ngOnInit(): void {
    
      this.getGenerals();
      
      this.isLogin = localStorage.getItem('token')?true:false;
      this.isNotLogin = !this.isLogin;
      this.isDisplayed = this.isLogin?'none':'block';
      this.isNotDisplayed = this.isNotLogin?'none':'block';
  }

  logout(){

    Swal.fire({
      title: 'میخواهید از سامانه خارج بشید؟',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'خیر',
      denyButtonText: `خارج شو`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('با موفقیت خارج شدید', '', 'info')
        localStorage.removeItem('token');
        this.isDisplayed='block';
      }
    })
    
  }

  async getGenerals(){
    
    await this.http.get(environment.urls.baseUrl+'/img/files').subscribe((data:any)=>{
      // console.log(data);

    data.forEach((element:any) => {
          const path = element.path.replace('\\','/');


          
          element.path = path;
          // element.dataBase64 = Buffer.from(dataBuffer).toString('base64');
          this.datas.push(element)
          
          
          
      });

      console.log(data);
    // for (let i = 0; i < data.length; i++) {
    //   const element = data[i];
    //   // this.imgs = element.filter((s:any)=>{
    //   //   s.includes(element.img)
    //   // })
      
      
    // }


      



      
    },(error:any)=>{
      console.error(error);

    })

    await this.http.get(environment.urls.baseUrl+'/general').subscribe((data:any)=>{

      console.log(data);
      this.generals = data;
      
    },(error:any)=>{
      console.error(error);

    })

    await this.http.get(environment.urls.baseUrl+'/topteacher/all').subscribe((data:any)=>{

      console.log(data);
      this.topteachers = data;
      
    },(error:any)=>{
      console.error(error);

    })

    await this.http.get(environment.urls.baseUrl+'/topcourses/all').subscribe((data:any)=>{

      console.log(data);
      this.topcourses = data;
      
    },(error:any)=>{
      console.error(error);

    })

    await this.http.get(environment.urls.baseUrl+'/studentreview/all').subscribe((data:any)=>{

      this.studentreview = data;

      for (let i = 0; i < data.length; i++) {
        // const element = data[i];
        // element.arrStar = new Array(4)
        // this.studentreview.push(element)
      }
      console.log("student review : "+this.studentreview);
      
    },(error:any)=>{
      console.error(error);

    })

  }
 
  isDisable = true;
  update(){

    if (this.formData.valid) {
      this.isDisable =false;
    }else{
      this.isDisable =true;

    }

  }

  goto(path:string){
    this.Router.navigate(["../"+path], { relativeTo: this.Route });
  }

  sendForm(){

    if(this.formData.valid){

      this.http.post(environment.urls.baseUrl+'/contact/send',this.formData).subscribe((data:any)=>{

        this.isDisable =false;

      },(err:any)=>{
  
  
      })

    }else{
      this.isDisable =true;
      this.modalService.open('modal-1')
      console.log('errorrrr');
      

    }



  }



}

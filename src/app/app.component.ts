import { Component } from '@angular/core';
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
import { environment } from "./../environments/environment.prod";
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Buffer } from 'buffer';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'educationWebsite';
  image:any;
  imgs:any;
  datas:any=[];
  generals:any=[];
  topteachers:any=[];
  topcourses:any=[]
  studentreview:any=[]
  env = environment;
  formData : FormGroup = new FormGroup({
    fullname: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    telephone: new FormControl('',[Validators.required]),
    message: new FormControl('',Validators.required),
  });
  constructor(private http:HttpClient,private dom:DomSanitizer){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
      this.getGenerals();
    
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


      



      
    },error=>{
      console.error(error);

    })

    await this.http.get(environment.urls.baseUrl+'/general').subscribe((data:any)=>{

      console.log(data);
      this.generals = data;
      
    },error=>{
      console.error(error);

    })

    await this.http.get(environment.urls.baseUrl+'/topteacher/all').subscribe((data:any)=>{

      console.log(data);
      this.topteachers = data;
      
    },error=>{
      console.error(error);

    })

    await this.http.get(environment.urls.baseUrl+'/topcourses/all').subscribe((data:any)=>{

      console.log(data);
      this.topcourses = data;
      
    },error=>{
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
      
    },error=>{
      console.error(error);

    })

  }

  sendForm(){

    this.http.post(environment.urls.baseUrl+'/contact/send',this.formData).subscribe((data:any)=>{

      

    },(err:any)=>{


    })

  }


}

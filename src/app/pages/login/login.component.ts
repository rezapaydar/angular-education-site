import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Md5} from 'ts-md5';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment.prod";
import * as crypto from "crypto-js";
import { RouterLink } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup = new FormGroup({
    username:new FormControl('mamali'),
    password:new FormControl('193138191919'),
  })
  hashedPassword: any;
  hashedmd5:any;
  // hasher = new ParallelHasher('ts-md5')
  md5 : Md5 = new Md5();
  header : HttpHeaders = new HttpHeaders() ;
  loginProp : any;
  constructor(private http:HttpClient,private Router:Router,private Route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.loginForm.controls.username 

  }

  async sendForm(){
       
      // this.hashedmd5 = crypto.MD5(`${this.loginForm.controls['password'].value}`);
      // this.hashedPassword = crypto.SHA1(`${this.hashedmd5}`);
    console.log(this.loginForm);

      let body = {
        username:this.loginForm.controls['username'].value,
        password:this.loginForm.controls['password'].value,
      }

      await this.http.post(environment.urls.baseUrl+'/auth/login',body).subscribe(
        (response:any)=>{
          this.loginProp = response;
          console.log("login prop:",this.loginProp);
          localStorage.setItem('token',`${this.loginProp.token}`)
          Swal.fire('با موفقیت وارد شدید',`خوش آمدید ${body.username}`,'success')
          this.Router.navigate(['../home'])
        },(error:Error)=>{
          console.error(error);
          Swal.fire('ورود ناموفق بود',`${error.message}`,'error')

        }
      )

      // await this.header = new HttpHeaders({
      //   "token":`${this.loginProp.token}`
      // })

        setTimeout(()=>{
          // console.log(this.loginProp.token);    
          this.http.get(environment.urls.baseUrl+"/auth/me",{headers:new HttpHeaders({"token":`${this.loginProp.token}`})}
          ).subscribe(
            (resp:any)=>{
              console.log(resp);
              
            },
            (err:any)=>{
              console.log(err);
              
            }
          )
        },2000)



  }

  redirectTo(path:any){
      this.Router.navigate([`../${path}`])
  }

}

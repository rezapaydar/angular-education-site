import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  formData : FormGroup = new FormGroup({
    channelName: new FormControl('',Validators.required),
    channelDescription: new FormControl('',Validators.required),
    username: new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    telephone: new FormControl('',[Validators.required]),
    password: new FormControl('',Validators.required),
    isAdmin: new FormControl('',Validators.required),
    // profilePicture:new FormGroup({
    //   name:new FormControl('',Validators.required),
    //   desc:new FormControl('',Validators.required),
    //   path:new FormControl('',Validators.required),
    //   type:new FormControl('',Validators.required),
    // }),
  });
  // fullname: String,
  // email: String,
  // username:String,
  // password:String,
  // isAdmin:Boolean,
  // profilePicture:{
  //     name:String,
  //     desc:String,
  //     path:String,
  //     type:String,
  // },
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get(environment.urls.baseUrl+"/auth/me",{headers:new HttpHeaders({"token":`${localStorage.getItem('token')}`})}
          ).subscribe(
            (resp:any)=>{
              console.log(resp);
              
            },
            (err:any)=>{
              console.log(err);
              
            }
          )

  }

  

}

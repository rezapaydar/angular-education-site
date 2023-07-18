import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin:boolean=false;
  isNotLogin:boolean=false;
  isDisplayed:string='flex';
  isNotDisplayed:string='flex';
  constructor(private http:HttpClient,private Router:Router,private Route:ActivatedRoute) { }

  ngOnInit(): void {

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
        this.Router.navigate(['./home'])
      }
    })
    
  }

  goto(path:string){
    this.Router.navigate(["../"+path], { relativeTo: this.Route });
  }

}

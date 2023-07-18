import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private Router:Router,private Route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  goto(path:string){
    this.Router.navigate([path], { relativeTo: this.Route });
  }

}

import { Component, OnInit } from '@angular/core';
import { GeneralsVarService } from '../services/generals-var.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  generals:any=this.globalvar.general;
  constructor(private globalvar:GeneralsVarService) { }

  ngOnInit(): void {
    this.generals = this.globalvar.general ; 
    console.log('general footer   : ' + this.generals);
    
  }

}

import { Component, OnInit } from '@angular/core';
import {Layouts} from '../data/layouts.data'

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {
layouts=Layouts;
selectedLayout=this.layouts[0];
  constructor() { }

  ngOnInit() {
  }
  changeLayout(layout){
    console.log(this.selectedLayout.description);
        for(var i=0;i<this.layouts.length;i++){
          
            if(layout==this.layouts[i].name){

              this.selectedLayout=this.layouts[i];
            }


        }
  }

}

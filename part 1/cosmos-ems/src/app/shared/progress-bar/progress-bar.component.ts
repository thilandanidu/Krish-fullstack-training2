//import { Component, Input, OnInit, Output } from '@angular/core';
//import { Stream } from 'stream';
//import { EventEmitter } from 'tream';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'em-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  //progress:number=0;
  color:string=''

  //this get value from parent component to the child component
  @Input() progress:number=0;
  @Input() firstName:string=''
  @Output()progressClick: EventEmitter<string> = new EventEmitter<string>();
  //@Output()progressClick: EventEmitter = new EventEmitter();


  constructor() { }

  ngOnInit(): void {

    if(this.progress<0||this.progress>100){
      this.progress =0;
    }

    if(this.progress <35){
      this.color ='red'
    }
    else if(this.progress <75){
      this.color ='yellow'
    }
    else{
      this.color ='green'
    }
  }
  onClick(){
    this.progressClick.emit(`${this.firstName}' s progress is ${this.progress} %`)
  }

}

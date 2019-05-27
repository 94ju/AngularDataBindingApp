import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit ,OnChanges,DoCheck,AfterContentInit{
  @Input('svrElement') element :{type:string,name:string,content:string};
  @Input() name:string;
  constructor() {
    console.log('constructor of server called')
   }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes)
    console.log('ng onChanges of server called')
  }

  ngOnInit() {
    console.log('ng onInit of server called')
  }
  ngDoCheck(){
    console.log('ng DoCheck of server called');
  }
  ngAfterContentInit(){
    console.log('ng afterContent of server called');
  }

}

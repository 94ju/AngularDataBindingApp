import {
   Component,
    OnInit,
     Input,
      OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit ,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input('svrElement') element :{type:string,name:string,content:string};
  @Input() name:string;
  @ViewChild('heading') header:ElementRef;
  constructor() {
    console.log('constructor of server called')
   }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes)
    console.log('ng onChanges of server called')
  }

  ngOnInit() {
    
    console.log('ng onInit of server called')
    console.log('This is text content:'+this.header.nativeElement.textContent)
  }
  ngDoCheck(){
    console.log('ng DoCheck of server called');
  }
  ngAfterContentInit(){
    console.log('ng afterContent of server called');
  }
  ngAfterContentChecked(){
    console.log('ng afaterContentchecked of server called');
  }
  ngAfterViewInit(){
    console.log('ng afterViewInit of server called');
    console.log('This is text content:'+this.header.nativeElement.textContent)
  }
  ngAfterViewChecked(){
    console.log('ng afterviewChecked of server called');
  }
  ngOnDestroy(){
    console.log('ng Ondestroy of server called');
  }

}

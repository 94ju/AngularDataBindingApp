import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated=new EventEmitter<{serverName:string ,serverContent:string}>();
  @Output('bpcreated') blueprintCreated= new EventEmitter<{serverName:string ,serverContent:string}>();
 // newServerName='';
  // newServerContent='';
  @ViewChild('serverContentInput') serverContentInput:ElementRef;
  constructor() { }

  ngOnInit() {
  }
  onAddServer(nameoftheserver:HTMLInputElement){
   console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName:nameoftheserver.value,
      serverContent:this.serverContentInput.nativeElement.value
    });
  }
  onAddBluePrint(nameoftheserver:HTMLInputElement){
   
    // this.serverCreated.emit({
    //   serverName:nameoftheserver.value,
    //   // serverContent:this.newServerContent
    // });
  }
}

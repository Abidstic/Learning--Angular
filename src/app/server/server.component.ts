import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  allowedNewServer: boolean= false;
  serverCreationStatus:string='No server1 was created';
  ServerName='';
  nullValue= false;
  // constructor() {
  //   if(!this.ServerName){
  //     this.null=false;
  //
  //   }
  // }
  onCreateServer(){
     this.serverCreationStatus='Server was created.name is '+this.ServerName;
    // this.ServerName='';
    this.nullValue=true;
  }

  onUpdateServer(event: Event) {
    this.ServerName= (<HTMLInputElement> event.target).value;


  }
}

import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class Server1Component implements OnInit {
  server1: {id: number, name: string, status: string};

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.server1= this.serversService.getServer1(1);
  }

}

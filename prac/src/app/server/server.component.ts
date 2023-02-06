import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';

  allowNewServer = false;
  serverName = 'serve';
  serverClickStatus = 'no Server';
  createdServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
   }

  ngOnInit(): void {
  }

  onServer() {
    this.createdServer = true;
    this.serverClickStatus = 'this server was created by ' + this.serverName;
  }

}

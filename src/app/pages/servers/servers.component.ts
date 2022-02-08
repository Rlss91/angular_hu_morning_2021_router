import { Component, OnInit } from '@angular/core';
import ServerData from 'src/app/model/ServerData.model';
import { ServersDataService } from 'src/app/services/servers-data.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  serverArr: ServerData[];
  constructor(private serversDataService: ServersDataService) {
    this.serverArr = this.serversDataService.serversArr;
  }

  ngOnInit(): void {}
}

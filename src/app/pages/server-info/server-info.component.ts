import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import ServerData from 'src/app/model/ServerData.model';
import { ServersDataService } from 'src/app/services/servers-data.service';

@Component({
  selector: 'app-server-info',
  templateUrl: './server-info.component.html',
  styleUrls: ['./server-info.component.css'],
})
export class ServerInfoComponent implements OnInit {
  selectedServer: ServerData;
  constructor(
    private route: ActivatedRoute,
    private serversDataService: ServersDataService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((qparams: Params) => {
      console.log('qparams from server info', qparams);
      this.selectedServer = this.serversDataService.serversArr.find(
        (serverItem) => serverItem.code == qparams['servercode']
      );
      console.log('this.selectedServer', this.selectedServer);
    });
  }

  handleServerStatusChanged(status: boolean): void {
    this.serversDataService.updateServerStatus(
      this.selectedServer.code,
      status
    );
  }
}

import { Injectable } from '@angular/core';
import ServerData from '../model/ServerData.model';

@Injectable({
  providedIn: 'root',
})
export class ServersDataService {
  serversArr: ServerData[];
  constructor() {
    this.serversArr = [
      {
        name: 'amazon server 1',
        status: true,
        desc: 'web server',
        code: 1,
      },
      {
        name: 'amazon server 2',
        status: true,
        desc: 'web server',
        code: 2,
      },
      {
        name: 'amazon server 3',
        status: true,
        desc: 'web server',
        code: 3,
      },
      {
        name: 'amazon server 4',
        status: true,
        desc: 'web server',
        code: 4,
      },
    ];
  }

  updateServerStatus(serverCode: number, status: boolean): void {
    if (serverCode < 0 || serverCode > this.serversArr.length - 1) {
      return;
    }
    let selectedServer = this.serversArr.find(
      (item) => item.code == serverCode
    );
    if (selectedServer) {
      selectedServer.status = status;
    }
    // this.serversArr[serverId].status = status;
  }
}

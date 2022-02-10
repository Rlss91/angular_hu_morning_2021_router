import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import ServerData from '../model/ServerData.model';

@Injectable({
  providedIn: 'root',
})
export class ServersDataService {
  serversArr: ServerData[];
  serversDataChanged: Subject<ServerData[]>;
  constructor() {
    this.serversDataChanged = new Subject<ServerData[]>();
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
    let selectedServer = this.serversArr.find(
      (item) => item.code == serverCode
    );
    if (selectedServer) {
      selectedServer.status = status;
      this.serversDataChanged.next(this.serversArr);
    }
  }
}

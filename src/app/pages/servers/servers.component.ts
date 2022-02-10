import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import ServerData from 'src/app/model/ServerData.model';
import { ServersDataService } from 'src/app/services/servers-data.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  serverArr: ServerData[];
  serverChangeSub: Subscription;
  constructor(
    private serversDataService: ServersDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.serverArr = this.serversDataService.serversArr;
  }

  ngOnInit(): void {
    this.serverChangeSub = this.serversDataService.serversDataChanged.subscribe(
      (serverArr: ServerData[]) => {
        this.serverArr = serverArr;
      }
    );
  }

  handleServerClick(chosenServerCode: number): void {
    this.router.navigate(['serverinfo'], {
      relativeTo: this.route,
      queryParams: {
        servercode: chosenServerCode,
      },
    });
  }
}

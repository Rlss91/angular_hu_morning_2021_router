import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ServerData from 'src/app/model/ServerData.model';
import { ServersDataService } from 'src/app/services/servers-data.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  serverArr: ServerData[];
  constructor(
    private serversDataService: ServersDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.serverArr = this.serversDataService.serversArr;
  }

  ngOnInit(): void {}

  handleServerClick(chosenServerCode: number): void {
    this.router.navigate(['serverinfo'], {
      relativeTo: this.route,
      queryParams: {
        servercode: chosenServerCode,
      },
    });
  }
}

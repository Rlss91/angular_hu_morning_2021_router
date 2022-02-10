import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import ServerData from 'src/app/model/ServerData.model';

@Component({
  selector: 'app-server-card',
  templateUrl: './server-card.component.html',
  styleUrls: ['./server-card.component.css'],
})
export class ServerCardComponent implements OnInit {
  @Input() serverData: ServerData;
  @Output() onStatusChanged: EventEmitter<boolean>;
  constructor() {
    this.onStatusChanged = new EventEmitter<boolean>();
  }

  ngOnInit(): void {}

  handleServerStatusChange(serverStatus: boolean): void {
    this.onStatusChanged.emit(serverStatus);
  }
}

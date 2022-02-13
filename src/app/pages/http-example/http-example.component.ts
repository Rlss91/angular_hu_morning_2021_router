import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.css'],
})
export class HttpExampleComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .post('http://localhost:3000/users', {
        name: 'ooo',
      })
      .subscribe((data: any) => {
        console.log('data from server', data);
      });
    //http://localhost:3000/users?keyT=valueT&key2T=value2T&key3T=value3T
    let qParamsT = new HttpParams();
    qParamsT = qParamsT.append('keyT', 'valueT');
    qParamsT = qParamsT.append('key2T', 'value2T');
    qParamsT = qParamsT.append('key3T', 'value3T');
    this.http
      .get('http://localhost:3000/users', {
        params: qParamsT,
      })
      .subscribe((data: any) => {
        console.log('data from server method get', data);
      });
  }
}

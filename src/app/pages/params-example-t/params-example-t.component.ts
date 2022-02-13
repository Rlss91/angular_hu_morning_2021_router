import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-params-example-t',
  templateUrl: './params-example-t.component.html',
  styleUrls: ['./params-example-t.component.css'],
})
export class ParamsExampleTComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((dataT: Params) => {
      console.log(dataT['id']);
    });
  }
}

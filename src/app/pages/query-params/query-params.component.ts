import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-query-params',
  templateUrl: './query-params.component.html',
  styleUrls: ['./query-params.component.css'],
})
export class QueryParamsComponent implements OnInit {
  name: string;
  id: number;
  namesArr: string[];
  constructor(private route: ActivatedRoute) {
    this.name = '';
    this.id = NaN;
    this.namesArr = ['kenny', 'john', 'bob', 'sami', 'daniel'];
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((qparams: Params) => {
      console.log(qparams);
      this.name = qparams['name'];
      this.id = qparams['id'];
    });
  }
}

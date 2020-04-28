import { Component, OnInit } from '@angular/core';
import JsonData from './voters_data.json';

export interface Voter {
  name: string,
  age: number,
  city: string
}

@Component({
  selector: 'app-pump',
  templateUrl: './pump.component.html',
  styleUrls: ['./pump.component.css']
})
export class PumpComponent implements OnInit {
  dataColumns: string[] = ['index', 'name', 'age', 'city'];
  dataSource: Voter[];

  ngOnInit(): void {
    console.log(JsonData);
    this.dataSource = JsonData;
  }
}

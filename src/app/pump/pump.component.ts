import { Component, OnInit } from '@angular/core';

export interface Voter {
  name: string,
  age: number,
  city: string
}

const VOTERS_DATA: Voter[] = [
  { name: 'Jan', age: 33, city: 'Praha' },
  { name: 'Josef', age: 55, city: 'Liberec' },
  { name: 'Miroslav', age: 44, city: 'Jičín' },
  { name: 'Vladislav', age: 22, city: 'Praha' },
];

@Component({
  selector: 'app-pump',
  templateUrl: './pump.component.html',
  styleUrls: ['./pump.component.css']
})
export class PumpComponent implements OnInit {
  dataColumns: string[] = ['index', 'name', 'age', 'city'];
  dataSource = VOTERS_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

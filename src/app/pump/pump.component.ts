import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
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
  sortedDataSource: Voter[];

  constructor() {
    this.sortedDataSource = JsonData.slice();
  }

  ngOnInit(): void {
  }

  sortByColumn(sort: Sort) {
    const data = JsonData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedDataSource = data;
      return;
    }

    this.sortedDataSource = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return this.compare(a.name, b.name, isAsc);
        case 'age':
          return this.compare(a.age, b.age, isAsc);
        case 'city':
          return this.compare(a.city, b.city, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}


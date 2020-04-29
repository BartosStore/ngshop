import { Component, OnInit, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';
import JsonData from './voters_data.json';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  sortedDataSource: MatTableDataSource<Voter>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  length;
  pageSize;
  pageEvent: PageEvent;

  constructor() {
    this.length = JsonData.length;
    this.pageSize = this.pageSizeOptions[1];
    this.sortedDataSource = new MatTableDataSource<Voter>(JsonData.slice());
  }

  ngOnInit(): void {
    this.sortedDataSource.paginator = this.paginator;
  }

  sortByColumn(sort: Sort) {
    const data = JsonData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedDataSource = new MatTableDataSource<Voter>(data);
      return;
    }

    const sortedData = data.sort((a, b) => {
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

    this.sortedDataSource = new MatTableDataSource<Voter>(sortedData);
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}


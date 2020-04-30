import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import JsonData from './voters_data.json';

import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { PrintDialogComponent } from '../print-dialog/print-dialog.component';

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
  // table data
  dataColumns: string[] = ['index', 'name', 'age', 'city', 'selection'];
  sortedDataSource: MatTableDataSource<Voter>;

  // pagination
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  length;
  pageSize;
  pageEvent: PageEvent;

  // selection
  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<Voter>(this.allowMultiSelect, this.initialSelection);

  constructor(public dialog: MatDialog) {
    this.length = JsonData.length;
    this.pageSize = this.pageSizeOptions[1];
    this.sortedDataSource = new MatTableDataSource<Voter>(JsonData.slice());
  }

  ngOnInit(): void {
    this.sortedDataSource.paginator = this.paginator;
  }

  printSelected() {
    console.log('Selected items: ' + this.selection.selected.length);
    this.sortedDataSource.filteredData.forEach(row => {
      if (this.selection.isSelected(row)) {
        console.log(row.name + ' from ' + row.city)
      }
    });

    const dialogVoter: Voter[] = [{ name: 'Anna', age: 28, city: 'HK' },{ name: 'Sofie', age: 29, city: 'HK' }];
    this.dialog.open(PrintDialogComponent, {
      data: dialogVoter
    });
  }

  isAllSelected() {
    const selectedCount = this.selection.selected.length;
    const allRows = this.sortedDataSource.data.length;
    return selectedCount === allRows;
  }

  toggleAll() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.sortedDataSource.filteredData.forEach(row => this.selection.select(row));
  }

  toggle(row) {
    this.selection.isSelected(row) ?
      this.selection.deselect(row) :
      this.selection.select(row);
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.sortedDataSource.filter = filterValue.trim().toLowerCase();
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


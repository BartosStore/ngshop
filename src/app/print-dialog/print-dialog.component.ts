import { Component, OnInit, Inject } from '@angular/core';
import { Voter } from '../pump/pump.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-print-dialog',
  templateUrl: './print-dialog.component.html',
  styleUrls: ['./print-dialog.component.css']
})
export class PrintDialogComponent implements OnInit {
  dataColumns: string[] = ['name', 'age', 'city'];
  votersDataSource: MatTableDataSource<Voter>;

  constructor(@Inject(MAT_DIALOG_DATA) public voters: Voter[]) {
    console.log(voters);
    this.votersDataSource = new MatTableDataSource<Voter>(voters.slice());
  }

  ngOnInit(): void {
  }
}

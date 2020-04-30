import { Component, OnInit, Inject } from '@angular/core';
import { Voter } from '../pump/pump.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-print-dialog',
  templateUrl: './print-dialog.component.html',
  styleUrls: ['./print-dialog.component.css']
})
export class PrintDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Voter) { }

  ngOnInit(): void {
  }
}

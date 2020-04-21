import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration-application',
  templateUrl: './administration-application.component.html',
  styleUrls: ['./administration-application.component.css']
})
export class AdministrationApplicationComponent implements OnInit {
  version = "1.0.0";

  constructor() { }

  ngOnInit(): void {
  }

}

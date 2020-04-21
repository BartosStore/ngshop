import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration-about',
  templateUrl: './administration-about.component.html',
  styleUrls: ['./administration-about.component.css']
})
export class AdministrationAboutComponent implements OnInit {
  purpose = "Heavy cool automation tool";
  
  constructor() { }

  ngOnInit(): void {
  }

}

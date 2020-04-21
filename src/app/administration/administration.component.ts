import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  user = "Josef Novak";
  state = "Active";
  emailNotification = "on";
  address = "Kvetinova 240";
  city = "Jicin"

  constructor() { }

  ngOnInit(): void {
  }

}

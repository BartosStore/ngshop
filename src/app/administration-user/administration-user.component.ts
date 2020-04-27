import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration-user',
  templateUrl: './administration-user.component.html',
  styleUrls: ['./administration-user.component.css']
})
export class AdministrationUserComponent implements OnInit {
  user = "Josef Novak";
  state = "Active";
  emailNotification = "on";
  address = "Kvetinova 240";
  city = "Jicin";

  ageMin = 7;
  ageMax = 100;
  ageStep = 1;
  ageTickInterval = 100;
  ageValue = 28;

  professions = ['programmer', 'administrator', 'manager'];

  isNotificationsEnabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}

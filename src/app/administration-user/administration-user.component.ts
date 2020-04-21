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
  
  constructor() { }

  ngOnInit(): void {
  }

}

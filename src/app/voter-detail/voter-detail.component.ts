import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voter-detail',
  templateUrl: './voter-detail.component.html',
  styleUrls: ['./voter-detail.component.css']
})
export class VoterDetailComponent implements OnInit {
  name = 'Anna';
  age = 28;
  city = 'HK';

  constructor() { }

  ngOnInit(): void {
  }

}

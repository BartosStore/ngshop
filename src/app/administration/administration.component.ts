import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => console.log(params));
   }

  ngOnInit(): void {
  }

}

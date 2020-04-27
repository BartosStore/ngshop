import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

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

  formControl = new FormControl();
  professions: string[] = ['programmer', 'administrator', 'manager'];
  filteredProfessions: Observable<string[]>;

  isNotificationsEnabled = false;

  constructor() { }

  ngOnInit(): void {
    this.filteredProfessions = this.formControl.valueChanges.pipe(startWith(''), map(inputValue => this._filterProfessions(inputValue)));
  }

  _filterProfessions(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.professions.filter(profession => profession.toLowerCase().includes(filterValue));
  }
}

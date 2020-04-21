import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationApplicationComponent } from './administration-application.component';

describe('AdministrationApplicationComponent', () => {
  let component: AdministrationApplicationComponent;
  let fixture: ComponentFixture<AdministrationApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

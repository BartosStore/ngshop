import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationAboutComponent } from './administration-about.component';

describe('AdministrationAboutComponent', () => {
  let component: AdministrationAboutComponent;
  let fixture: ComponentFixture<AdministrationAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

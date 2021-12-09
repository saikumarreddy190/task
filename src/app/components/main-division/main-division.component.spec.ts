import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDivisionComponent } from './main-division.component';

describe('MainDivisionComponent', () => {
  let component: MainDivisionComponent;
  let fixture: ComponentFixture<MainDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDivisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

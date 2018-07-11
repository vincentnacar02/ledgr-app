import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscalyearComponent } from './fiscalyear.component';

describe('FiscalyearComponent', () => {
  let component: FiscalyearComponent;
  let fixture: ComponentFixture<FiscalyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiscalyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiscalyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

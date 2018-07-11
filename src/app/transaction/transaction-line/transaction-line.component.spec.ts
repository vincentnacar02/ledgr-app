import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionLineComponent } from './transaction-line.component';

describe('TransactionLineComponent', () => {
  let component: TransactionLineComponent;
  let fixture: ComponentFixture<TransactionLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

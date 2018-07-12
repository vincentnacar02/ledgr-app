import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentRegisterComponent } from './document-register.component';

describe('DocumentRegisterComponent', () => {
  let component: DocumentRegisterComponent;
  let fixture: ComponentFixture<DocumentRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapretwoComponent } from './papretwo.component';

describe('PapretwoComponent', () => {
  let component: PapretwoComponent;
  let fixture: ComponentFixture<PapretwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapretwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapretwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

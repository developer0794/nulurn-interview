import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapreOneComponent } from './papre-one.component';

describe('PapreOneComponent', () => {
  let component: PapreOneComponent;
  let fixture: ComponentFixture<PapreOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapreOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapreOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapreThreeComponent } from './papre-three.component';

describe('PapreThreeComponent', () => {
  let component: PapreThreeComponent;
  let fixture: ComponentFixture<PapreThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapreThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapreThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChaptersComponent } from './card-chapters.component';

describe('CardChaptersComponent', () => {
  let component: CardChaptersComponent;
  let fixture: ComponentFixture<CardChaptersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardChaptersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

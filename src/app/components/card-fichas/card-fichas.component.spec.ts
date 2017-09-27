import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFichasComponent } from './card-fichas.component';

describe('CardFichasComponent', () => {
  let component: CardFichasComponent;
  let fixture: ComponentFixture<CardFichasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFichasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFichasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

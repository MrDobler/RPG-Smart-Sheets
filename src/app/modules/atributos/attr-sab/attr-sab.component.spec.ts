import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrSabComponent } from './attr-sab.component';

describe('AttrSabComponent', () => {
  let component: AttrSabComponent;
  let fixture: ComponentFixture<AttrSabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrSabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrSabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrCarComponent } from './attr-car.component';

describe('AttrCarComponent', () => {
  let component: AttrCarComponent;
  let fixture: ComponentFixture<AttrCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

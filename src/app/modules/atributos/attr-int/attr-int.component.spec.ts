import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrIntComponent } from './attr-int.component';

describe('AttrIntComponent', () => {
  let component: AttrIntComponent;
  let fixture: ComponentFixture<AttrIntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrIntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrIntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

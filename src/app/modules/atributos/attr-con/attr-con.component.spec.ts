import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrConComponent } from './attr-con.component';

describe('AttrConComponent', () => {
  let component: AttrConComponent;
  let fixture: ComponentFixture<AttrConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

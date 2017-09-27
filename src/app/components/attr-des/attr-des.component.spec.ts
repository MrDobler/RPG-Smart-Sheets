import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrDesComponent } from './attr-des.component';

describe('AttrDesComponent', () => {
  let component: AttrDesComponent;
  let fixture: ComponentFixture<AttrDesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrDesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

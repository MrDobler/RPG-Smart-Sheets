import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrForComponent } from './attr-for.component';

describe('AttrForComponent', () => {
  let component: AttrForsComponent;
  let fixture: ComponentFixture<AttrForsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrForsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrForsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

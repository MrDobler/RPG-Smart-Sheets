import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrPrimariosComponent } from './attr-primarios.component';

describe('AttrPrimariosComponent', () => {
  let component: AttrPrimariosComponent;
  let fixture: ComponentFixture<AttrPrimariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrPrimariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrPrimariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

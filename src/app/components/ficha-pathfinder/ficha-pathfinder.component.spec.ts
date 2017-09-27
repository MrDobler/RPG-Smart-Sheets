import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaPathfinderComponent } from './ficha-pathfinder.component';

describe('FichaPathfinderComponent', () => {
  let component: FichaPathfinderComponent;
  let fixture: ComponentFixture<FichaPathfinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaPathfinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaPathfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

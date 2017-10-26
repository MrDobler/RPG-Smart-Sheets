import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveReflexoComponent } from './save-reflexo.component';

describe('SaveReflexoComponent', () => {
  let component: SaveReflexoComponent;
  let fixture: ComponentFixture<SaveReflexoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveReflexoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveReflexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

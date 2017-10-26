import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveVontadeComponent } from './save-vontade.component';

describe('SaveVontadeComponent', () => {
  let component: SaveVontadeComponent;
  let fixture: ComponentFixture<SaveVontadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveVontadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveVontadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

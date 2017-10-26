import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveFortitudeComponent } from './save-fortitude.component';

describe('SaveFortitudeComponent', () => {
  let component: SaveFortitudeComponent;
  let fixture: ComponentFixture<SaveFortitudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveFortitudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveFortitudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

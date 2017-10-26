import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesEspeciaisComponent } from './habilidades-especiais.component';

describe('HabilidadesEspeciaisComponent', () => {
  let component: HabilidadesEspeciaisComponent;
  let fixture: ComponentFixture<HabilidadesEspeciaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabilidadesEspeciaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadesEspeciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

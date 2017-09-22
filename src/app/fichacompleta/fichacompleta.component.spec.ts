import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichacompletaComponent } from './fichacompleta.component';

describe('FichacompletaComponent', () => {
  let component: FichacompletaComponent;
  let fixture: ComponentFixture<FichacompletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichacompletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichacompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

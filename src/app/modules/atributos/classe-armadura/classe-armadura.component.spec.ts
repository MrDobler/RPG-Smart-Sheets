import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseArmaduraComponent } from './classe-armadura.component';

describe('ClasseArmaduraComponent', () => {
  let component: ClasseArmaduraComponent;
  let fixture: ComponentFixture<ClasseArmaduraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseArmaduraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseArmaduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

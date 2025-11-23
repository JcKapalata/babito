import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsGeneralesVentes } from './conditions-generales-ventes';

describe('ConditionsGeneralesVentes', () => {
  let component: ConditionsGeneralesVentes;
  let fixture: ComponentFixture<ConditionsGeneralesVentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionsGeneralesVentes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionsGeneralesVentes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

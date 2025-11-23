import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiqueRetour } from './politique-retour';

describe('PolitiqueRetour', () => {
  let component: PolitiqueRetour;
  let fixture: ComponentFixture<PolitiqueRetour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolitiqueRetour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolitiqueRetour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

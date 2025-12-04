import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatForm } from './achat-form';

describe('CommandeForm', () => {
  let component: AchatForm;
  let fixture: ComponentFixture<AchatForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchatForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchatForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

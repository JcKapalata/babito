import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueDetailAchat } from './historique-detail-achat';

describe('HistoriqueDetailAchat', () => {
  let component: HistoriqueDetailAchat;
  let fixture: ComponentFixture<HistoriqueDetailAchat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriqueDetailAchat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriqueDetailAchat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

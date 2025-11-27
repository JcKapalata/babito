import { TestBed } from '@angular/core/testing';

import { ShowInfoLegales } from './show-info-legales';

describe('ShowInfoLegales', () => {
  let service: ShowInfoLegales;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowInfoLegales);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

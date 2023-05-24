import { TestBed } from '@angular/core/testing';

import { SevicepageService } from './sevicepage.service';

describe('SevicepageService', () => {
  let service: SevicepageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SevicepageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

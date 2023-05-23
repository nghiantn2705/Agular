import { TestBed } from '@angular/core/testing';

import { ServicepageService } from './servicepage.service';

describe('ServicepageService', () => {
  let service: ServicepageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicepageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

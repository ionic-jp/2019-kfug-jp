import { TestBed } from '@angular/core/testing';

import { SponsorsService } from './sponsors.service';

describe('SponsorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SponsorsService = TestBed.get(SponsorsService);
    expect(service).toBeTruthy();
  });
});

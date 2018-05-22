import { TestBed, inject } from '@angular/core/testing';

import { UpdateLocationService } from './update-location.service';

describe('UpdateLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateLocationService]
    });
  });

  it('should be created', inject([UpdateLocationService], (service: UpdateLocationService) => {
    expect(service).toBeTruthy();
  }));
});

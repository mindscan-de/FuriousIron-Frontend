import { TestBed, inject } from '@angular/core/testing';

import { ResultMockService } from './result-mock.service';

describe('ResultMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultMockService]
    });
  });

  it('should be created', inject([ResultMockService], (service: ResultMockService) => {
    expect(service).toBeTruthy();
  }));
});

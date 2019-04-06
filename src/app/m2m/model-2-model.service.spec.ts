import { TestBed, inject } from '@angular/core/testing';

import { Model2ModelService } from './model2-model.service';

describe('Model2ModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Model2ModelService]
    });
  });

  it('should be created', inject([Model2ModelService], (service: Model2ModelService) => {
    expect(service).toBeTruthy();
  }));
});

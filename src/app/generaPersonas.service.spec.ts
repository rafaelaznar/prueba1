/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeneraPersonasService } from './generaPersonas.service';

describe('Service: GeneraPersonas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneraPersonasService]
    });
  });

  it('should ...', inject([GeneraPersonasService], (service: GeneraPersonasService) => {
    expect(service).toBeTruthy();
  }));
});

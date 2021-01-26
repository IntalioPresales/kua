/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BarcodesService } from './barcodes.service';

describe('Service: Barcodes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarcodesService]
    });
  });

  it('should ...', inject([BarcodesService], (service: BarcodesService) => {
    expect(service).toBeTruthy();
  }));
});

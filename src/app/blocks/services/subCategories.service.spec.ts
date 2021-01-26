/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubCategoriesService } from './subCategories.service';

describe('Service: Categories', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubCategoriesService]
    });
  });

  it('should ...', inject([SubCategoriesService], (service: SubCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});

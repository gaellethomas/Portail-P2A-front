import { TestBed, inject } from '@angular/core/testing';

import { LinkTypeService } from './link-type.service';

describe('LinkTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinkTypeService]
    });
  });

  it('should be created', inject([LinkTypeService], (service: LinkTypeService) => {
    expect(service).toBeTruthy();
  }));
});

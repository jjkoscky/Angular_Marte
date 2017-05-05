import { TestBed, inject } from '@angular/core/testing';

import { BlogService  } from './martepage.service';

describe('MartepageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MartepageService]
    });
  });

  it('should ...', inject([MartepageService], (service: MartepageService) => {
    expect(service).toBeTruthy();
  }));
});

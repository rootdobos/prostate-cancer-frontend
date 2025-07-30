import { TestBed } from '@angular/core/testing';

import { SlideService } from './slide.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('SlideService', () => {
  let service: SlideService;

  beforeEach(() => {
    TestBed.configureTestingModule({
            providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(SlideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ConfigService } from './config.service';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

describe('ConfigService', () => {
  let service: ConfigService;
  let httpTesting: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    httpTesting = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ConfigService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should read the environment', fakeAsync(() => {

    service.load().subscribe();

    const req = httpTesting.expectOne('/config.json', 'Request to load the configuration');

    expect(req.request.method).toBe('GET');
    const mock_config = {
      a: '1',
      b: 2
    }
    req.flush(mock_config)
    tick(100)
    expect(service.getConfig()).toEqual(mock_config);
  }));
});

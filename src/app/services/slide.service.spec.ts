import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SlideService } from './slide.service';
import { ConfigService } from './config.service';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';

describe('SlideService', () => {
  let service: SlideService;
  let httpTesting: HttpTestingController;
  let configServiceSpy: jasmine.SpyObj<ConfigService>;
  beforeEach(() => {
    configServiceSpy = jasmine.createSpyObj('ConfigService', ['getConfig']);
    configServiceSpy.getConfig.and.returnValue({ backend_url: 'asd.com' });
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    httpTesting = TestBed.inject(HttpTestingController);
    service = TestBed.inject(SlideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get slides', async () => {
    const slides$ = service.getSlides();
    const slidesPromise = firstValueFrom(slides$);
    const req = httpTesting.expectOne('/slides/', 'Request to load the slides');

    expect(req.request.method).toBe('GET');
    const mock_slide_list = {
      wsiList: ['0', '1', '2'],
    };
    req.flush(mock_slide_list);
    expect(await slidesPromise).toEqual(mock_slide_list);
  });

  it('test callSlideProcessing', async () => {
    const mock_response = {
      res: 'success',
    };

    service.setSelectedSlide('1');
    // tick(100);
    service.callSlideProcessing();
    let req = httpTesting.expectOne(
      '/tiles/extract?slideId=1',
      'Request to extract tiles'
    );

    expect(req.request.method).toBe('GET');

    req.flush(mock_response);

    req = httpTesting.expectOne(
      '/tiles/encode?slideId=1',
      'Request to encode tiles'
    );

    expect(req.request.method).toBe('GET');
    req.flush(mock_response);
    req = httpTesting.expectOne(
      '/tiles/get_attention_scores?slideId=1',
      'Request to get attention scores'
    );
    const mock_attention_score_response = {
      label: 5,
      probabilities: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6],
      attention_scores: {
        '0': [0],
        '1': [0],
        '2': [0],
        '3': [0],
        '4': [0],
        '5': [0],
      },
    };
    req.flush(mock_attention_score_response);
    const labelPromise = firstValueFrom(service.getLabel());
    expect(await labelPromise).toEqual(5);

    const probabilities = service.getProbalities();
    expect(probabilities()).toEqual([0.1, 0.2, 0.3, 0.4, 0.5, 0.6]);
  });

  it('test callImageVisualization', async () => {
    const mock_response = {
      columnCount: 1,
      rowCount: 1,
      minX: 0,
      minY: 0,
      images: [{ path: '/', x: 0, y: 0 }],
    };

    service.setSelectedSlide('1');
    // tick(100);
    service.callImageVisualization();
    let req = httpTesting.expectOne(
      '/tiles/get_attention_tiles',
      'Request to get visualization'
    );
    expect(req.request.method).toBe('POST');
    req.flush(mock_response);
    const imageGridDataPromise = firstValueFrom(service.getImageGridData());
    expect(await imageGridDataPromise).toEqual(mock_response);
  });
});

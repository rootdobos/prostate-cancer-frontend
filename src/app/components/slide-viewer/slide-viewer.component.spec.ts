import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideViewerComponent } from './slide-viewer.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('SlideViewerComponent', () => {
  let component: SlideViewerComponent;
  let fixture: ComponentFixture<SlideViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideViewerComponent],
            providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

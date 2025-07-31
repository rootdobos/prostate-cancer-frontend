import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbabilitiesComponent } from './probabilities.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { SlideService } from '../../services/slide.service';
import { signal } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ProbabilitiesComponent', () => {
  let component: ProbabilitiesComponent;
  let fixture: ComponentFixture<ProbabilitiesComponent>;
  let slideService: SlideService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProbabilitiesComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(ProbabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should not be visible',async () => {
    slideService = TestBed.inject(SlideService);
    const getProbabilities = spyOn(
      slideService,
      'getProbalities'
    ).and.returnValue(signal(null));

    fixture = TestBed.createComponent(ProbabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const probabilitiesEl = fixture.debugElement.query(
      By.css('div.probabilities')
    );
    expect(probabilitiesEl).toBeNull();
  });
    it('should be visible',async () => {
    slideService = TestBed.inject(SlideService);
    const getProbabilities = spyOn(
      slideService,
      'getProbalities'
    ).and.returnValue(signal([1,2,3,4,5,6]));

    fixture = TestBed.createComponent(ProbabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const probabilitiesEl = fixture.debugElement.query(
      By.css('div.probabilities')
    );
    expect(probabilitiesEl).toBeTruthy();
  });
});

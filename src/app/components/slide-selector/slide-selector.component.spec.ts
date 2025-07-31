import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSelectorComponent } from './slide-selector.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { SlideService } from '../../services/slide.service';
import { BehaviorSubject, of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('SlideSelectorComponent', () => {
  let component: SlideSelectorComponent;
  let fixture: ComponentFixture<SlideSelectorComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideSelectorComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        SlideService,
      ],
    }).compileComponents();

    const slideService = TestBed.inject(SlideService);

    const getSlidesSpy = spyOn(slideService, 'getSlides').and.returnValue(
      of({
        wsiList: ['1', '2', '3'],
      })
    );
    fixture = TestBed.createComponent(SlideSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display slides', () => {
    const divs = fixture.debugElement.queryAll(By.css('div.list-item'));

    expect(divs.length).toBe(3);
    expect(divs[0].nativeElement.textContent.trim()).toBe('1');
    expect(divs[1].nativeElement.textContent.trim()).toBe('2');
    expect(divs[2].nativeElement.textContent.trim()).toBe('3');
  });
});

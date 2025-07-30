import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSelectorComponent } from './slide-selector.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('SlideSelectorComponent', () => {
  let component: SlideSelectorComponent;
  let fixture: ComponentFixture<SlideSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideSelectorComponent],
            providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

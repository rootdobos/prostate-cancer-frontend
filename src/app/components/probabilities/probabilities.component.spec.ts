import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbabilitiesComponent } from './probabilities.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ProbabilitiesComponent', () => {
  let component: ProbabilitiesComponent;
  let fixture: ComponentFixture<ProbabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProbabilitiesComponent],
            providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProbabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

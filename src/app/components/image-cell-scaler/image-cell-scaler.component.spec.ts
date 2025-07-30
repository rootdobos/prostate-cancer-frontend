import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCellScalerComponent } from './image-cell-scaler.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ImageCellScalerComponent', () => {
  let component: ImageCellScalerComponent;
  let fixture: ComponentFixture<ImageCellScalerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageCellScalerComponent],
            providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCellScalerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

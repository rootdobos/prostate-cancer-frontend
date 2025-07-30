import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGridComponent } from './image-grid.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ImageGridComponent', () => {
  let component: ImageGridComponent;
  let fixture: ComponentFixture<ImageGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageGridComponent],
            providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

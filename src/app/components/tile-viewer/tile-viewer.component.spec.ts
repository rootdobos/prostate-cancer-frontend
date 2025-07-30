import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileViewerComponent } from './tile-viewer.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('TileViewerComponent', () => {
  let component: TileViewerComponent;
  let fixture: ComponentFixture<TileViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileViewerComponent],
            providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

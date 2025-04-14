import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlideService } from './services/slide.service';
import { FormsModule } from '@angular/forms';
import { SlideSelectorComponent } from './components/slide-selector/slide-selector.component';
import { LabelSelectorComponent } from './components/label-selector/label-selector.component';
import { SlideViewerComponent } from './components/slide-viewer/slide-viewer.component';
import { ProbabilitiesComponent } from './components/probabilities/probabilities.component';
import { ImageCellScalerComponent } from './components/image-cell-scaler/image-cell-scaler.component';

@Component({
  selector: 'app-root',
  imports: [SlideSelectorComponent, LabelSelectorComponent, SlideViewerComponent,ProbabilitiesComponent, ImageCellScalerComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'prostate-cancer-frontend';

  constructor(private slideService: SlideService) {}

  ngOnInit(): void {
    this.slideService.getSlides().subscribe({
      next: (response) => console.log(response),
      error: (err) => console.error('Slides Error:', err),
    });
  }
}

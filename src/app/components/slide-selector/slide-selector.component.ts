import { Component, inject, OnInit } from '@angular/core';
import { SlideService } from '../../services/slide.service';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-slide-selector',
  imports: [FormsModule],
  templateUrl: './slide-selector.component.html',
  styleUrl: './slide-selector.component.scss',
})
export class SlideSelectorComponent implements OnInit {
  slideService = inject(SlideService);
  selectedSlide = toSignal(this.slideService.getSelectedSlide());
  slides: string[] = [];
  isLoading = true;
  isAnalyzing = toSignal(this.slideService.getIsAnalyzing());
  ngOnInit(): void {
    this.slideService.getSlides().subscribe({
      next: (data) => {
        this.slides = data.wsiList;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching elements: ', err);
        this.isLoading = false;
      },
    });
  }

  selectItem(item: string): void {
    this.slideService.setSelectedSlide(item);
  }

  onSubmit(): void {
    this.slideService.callSlideProcessing();
  }
}

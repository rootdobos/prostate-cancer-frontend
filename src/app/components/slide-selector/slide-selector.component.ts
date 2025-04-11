import { Component, OnInit } from '@angular/core';
import { SlideService } from '../../services/slide.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slide-selector',
  imports: [FormsModule],
  templateUrl: './slide-selector.component.html',
  styleUrl: './slide-selector.component.scss',
})
export class SlideSelectorComponent implements OnInit {
  selectedSlide: string = '';
  slides: string[] = [];
  isLoading = true;
  constructor(private slideService: SlideService) {}

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
    this.selectedSlide = item;
  }

  onSubmit(): void {
    this.slideService.callSlideProcessing(this.selectedSlide);
  }
}

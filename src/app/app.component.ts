import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlideService } from './services/slide.service';
import { FormsModule } from '@angular/forms';
import { SlideSelectorComponent } from './components/slide-selector/slide-selector.component';
import { LabelSelectorComponent } from './components/label-selector/label-selector.component';

@Component({
  selector: 'app-root',
  imports: [SlideSelectorComponent, LabelSelectorComponent, RouterOutlet],
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

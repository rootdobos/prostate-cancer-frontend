import { Component, inject } from '@angular/core';
import { SlideService } from '../../services/slide.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-slide-viewer',
  imports: [],
  templateUrl: './slide-viewer.component.html',
  styleUrl: './slide-viewer.component.scss',
})
export class SlideViewerComponent {
  private slideService = inject(SlideService);
  selectedSlide = toSignal(this.slideService.getSelectedSlide());
}

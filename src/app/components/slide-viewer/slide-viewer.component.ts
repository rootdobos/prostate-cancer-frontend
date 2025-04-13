import { Component, inject } from '@angular/core';
import { SlideService } from '../../services/slide.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ImageGridComponent } from '../image-grid/image-grid.component';

@Component({
  selector: 'app-slide-viewer',
  imports: [ImageGridComponent],
  templateUrl: './slide-viewer.component.html',
  styleUrl: './slide-viewer.component.scss',
})
export class SlideViewerComponent {
  private slideService = inject(SlideService);
  selectedSlide = toSignal(this.slideService.getSelectedSlide());
}

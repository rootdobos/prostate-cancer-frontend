import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SlideService } from '../../services/slide.service';
import { environment } from '../../../environments/environment.development';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-image-grid',
  imports: [CommonModule],
  templateUrl: './image-grid.component.html',
  styleUrl: './image-grid.component.scss',
})
export class ImageGridComponent {
  private slideService = inject(SlideService);
  visualizationData = toSignal(this.slideService.getImageGridData());
  cellSize = toSignal( this.slideService.getCellSize())
  
  getImageAt(row: number, col: number): string | null {
    var cacheBuster = Date.now();
    var data =
      this.visualizationData()?.images.find(
        (img) => img.y === row && img.x === col
      ) || null;
    if (data)
      return (
        [environment.images_url, 'visualization', data.path].join('/') +
        '?t=' +
        cacheBuster
      );
    return environment.placeholder_image;
  }
  getColRange(): number[] {
    var minX = this.visualizationData()?.minX ?? 0;
    var columnCount = this.visualizationData()?.columnCount ?? 0;
    return Array.from({ length: columnCount - minX + 1 }, (_, i) => i + minX);
  }
  getRowRange(): number[] {
    var minY = this.visualizationData()?.minY ?? 0;
    var rowCount = this.visualizationData()?.rowCount ?? 0;
    return Array.from({ length: rowCount - minY + 1 }, (_, i) => i + minY);
  }
}

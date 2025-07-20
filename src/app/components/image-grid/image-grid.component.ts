import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { SlideService } from '../../services/slide.service';
import { environment } from '../../../environments/environment';
// import configurl from '../../assets/config.json';
import { toSignal } from '@angular/core/rxjs-interop';
import { TileViewerComponent } from '../tile-viewer/tile-viewer.component';
import { ConfigService } from '../../services/config.service';
@Component({
  selector: 'app-image-grid',
  imports: [CommonModule, TileViewerComponent],
  templateUrl: './image-grid.component.html',
  styleUrl: './image-grid.component.scss',
})
export class ImageGridComponent {
  private configService = inject(ConfigService);
  private slideService = inject(SlideService);
  visualizationData = toSignal(this.slideService.getImageGridData());
  cellSize = toSignal(this.slideService.getCellSize());
  gridHeight = computed(() => {
    var rowCount = this.visualizationData()?.rowCount ?? 0;
    return (rowCount + 1) * (this.cellSize() ?? 0);
  });
  gridWidth = computed(() => {
    var columnCount = this.visualizationData()?.columnCount ?? 0;
    return (columnCount + 1) * (this.cellSize() ?? 0);
  });
  getImageAt(row: number, col: number): string | null {
    var cacheBuster = [
      this.getSlideId(),
      this.getLabel().toString(),
      row.toString(),
      col.toString(),
    ].join('_');
    var data =
      this.visualizationData()?.images.find(
        (img) => img.y === row && img.x === col
      ) || null;
    if (data)
      return (
        [this.configService.getConfig().images_url, 'visualization', data.path].join('/') +
        '?t=' +
        cacheBuster
      );
    return this.configService.getConfig().placeholder_image;
  }
  getColRange(): number[] {
    var minX = this.visualizationData()?.minX ?? 0;
    var columnCount = this.visualizationData()?.columnCount ?? 0;
    return Array.from({ length: columnCount + 1 }, (_, i) => i + minX);
  }
  getRowRange(): number[] {
    var minY = this.visualizationData()?.minY ?? 0;
    var rowCount = this.visualizationData()?.rowCount ?? 0;
    return Array.from({ length: rowCount + 1 }, (_, i) => i + minY);
  }
  getSlideId(): string {
    return this.slideService.getSelectedSlide().value || '';
  }
  getLabel(): number {
    return this.slideService.getLabel().value || 6;
  }
}

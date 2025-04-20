import { Component, inject } from '@angular/core';
import { SlideService } from '../../services/slide.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tile-viewer',
  imports: [],
  templateUrl: './tile-viewer.component.html',
  styleUrl: './tile-viewer.component.scss'
})
export class TileViewerComponent {
private slideService = inject(SlideService)
private sanitizer = inject(DomSanitizer)
tileUrl: SafeUrl | null = null;

openViewer(slideId: string, col:number, row:number): void {
  console.log(slideId)
  this.slideService.getTile(slideId,col,row).subscribe((blob) => {
    const objectURL = URL.createObjectURL(blob);
    this.tileUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  });
}
closeViewer(): void {
  this.tileUrl = null;
}
}

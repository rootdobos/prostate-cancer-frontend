import { CommonModule } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { SlideService } from '../../services/slide.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-label-selector',
  imports: [CommonModule],
  templateUrl: './label-selector.component.html',
  styleUrl: './label-selector.component.scss',
})
export class LabelSelectorComponent {
  buttonLabels = [0, 1, 2, 3, 4, 5];

  buttonColors = [
    'rgb(0, 0, 255)', // Blue
    'rgb(0, 165, 255)', // Cyan
    'rgb(0, 255, 0)', // Green
    'rgb(255, 255, 0)', // Yellow
    'rgb(255, 165, 0)', // Orange
    'rgb(255, 0, 0)', // Red
  ];
  private slideService = inject(SlideService)
  selectedButton = toSignal(this.slideService.getLabel())
  onButtonClick(label: number) {
    this.slideService.setLabel(label)
  }
}

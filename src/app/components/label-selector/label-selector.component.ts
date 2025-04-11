import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

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

  selectedButton: WritableSignal<number | null> = signal(null);
  onButtonClick(label: number) {
    if (this.selectedButton() !== label) this.selectedButton.set(label);
    else this.selectedButton.set(null);
  }
}

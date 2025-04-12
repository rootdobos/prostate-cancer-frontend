import { Component, inject, Signal } from '@angular/core';
import { SlideService } from '../../services/slide.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-probabilities',
  imports: [CommonModule],
  templateUrl: './probabilities.component.html',
  styleUrl: './probabilities.component.scss'
})
export class ProbabilitiesComponent {
 private slideService = inject(SlideService)
 probabilities : Signal< number[]| null> = this.slideService.getProbalities();


 probabilityColors = [
  'rgb(0, 0, 255)', // Blue
  'rgb(0, 165, 255)', // Cyan
  'rgb(0, 255, 0)', // Green
  'rgb(255, 255, 0)', // Yellow
  'rgb(255, 165, 0)', // Orange
  'rgb(255, 0, 0)', // Red
];
}

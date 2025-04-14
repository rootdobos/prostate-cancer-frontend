import { Component, inject, OnInit } from '@angular/core';
import { SlideService } from '../../services/slide.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-cell-scaler',
  imports: [CommonModule, FormsModule],
  templateUrl: './image-cell-scaler.component.html',
  styleUrl: './image-cell-scaler.component.scss'
})
export class ImageCellScalerComponent implements  OnInit{
  private slideService = inject(SlideService)
  value =100;
  ngOnInit(): void {
    this.value =this.slideService.getCellSize().value
  }
  onValueChange(newValue:number){
    this.slideService.setCellSize(newValue)
  }
}

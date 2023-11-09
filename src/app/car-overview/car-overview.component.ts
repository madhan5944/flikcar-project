import { Component } from '@angular/core';

@Component({
  selector: 'app-car-overview',
  templateUrl: './car-overview.component.html',
  styleUrls: ['./car-overview.component.scss']
})
export class CarOverviewComponent {
  imageUrls: string[] = [

    'assets/smallimg1.svg',
    'assets/smallimg2.svg',
    'assets/smallimg3.svg',
    'assets/smallimg4.svg',
    'assets/smallimg5.svg',
    'assets/smallimg6.svg',
    // Add more image URLs as needed
  ];

  activeIndex: number = 0;

  setActiveImage(index: number): void {
    this.activeIndex = index;
  }

  showPrevImage(): void {
    this.activeIndex = (this.activeIndex - 1 + this.imageUrls.length) % this.imageUrls.length;
  }

  showNextImage(): void {
    this.activeIndex = (this.activeIndex + 1) % this.imageUrls.length;
  }

  getActiveImageUrl(): string {
    return this.imageUrls[this.activeIndex];
  }

}

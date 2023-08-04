import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CarouselService } from './carousel.service';
import { CarouselItem } from './carousel-item';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {

  items: CarouselItem[];
  selectedIndex: number;
  lastItem: number;
  firstItem: number;
  transform: number;

  constructor(private carouselService: CarouselService) {
    this.items = [];
    this.selectedIndex = 0;
    this.lastItem = 0;
    this.firstItem = 0;
    this.transform = 0;
  }

  ngOnInit() {
    this.carouselService.getData().subscribe(response => {
      const result = response as CarouselItem[];
      this.items = result;
      this.lastItem = this.items.length - 1;
    });
  }

  public next(): void {
    if (this.selectedIndex >= this.lastItem) return;    

    const imgContainer = document.querySelector(".img-container") as HTMLElement;
    const slides = document.querySelector(".slides") as HTMLElement;
    const size = slides.clientWidth;
    
    this.selectedIndex++;
    imgContainer.style.transition = 'transform 0.4s ease-in-out';    
    imgContainer.style.transform = 'translateX(' + (-size * this.selectedIndex) + 'px';
  }

  public previus(): void {
    if (this.selectedIndex <= 0) return;

    const imgContainer = document.querySelector(".img-container") as HTMLElement;
    const slides = document.querySelector(".slides") as HTMLElement;
    const size = slides.clientWidth;

    this.selectedIndex--;
    imgContainer.style.transition = 'transform 0.4s ease-in-out';        
    imgContainer.style.transform = 'translateX(' + (-size * this.selectedIndex ) + 'px';
  }

  public selectItem(index: number): void {
    const imgContainer = document.querySelector(".img-container") as HTMLElement;
    const slides = document.querySelector(".slides") as HTMLElement;
    const size = slides.clientWidth;

    imgContainer.style.transition = 'transform 0.4s ease-in-out';        
    imgContainer.style.transform = 'translateX(' + (-size * index ) + 'px';
    this.selectedIndex = index;
  }

}

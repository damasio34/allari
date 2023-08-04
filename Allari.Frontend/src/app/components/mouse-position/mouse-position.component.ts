import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-mouse-position',
  templateUrl: './mouse-position.component.html',
  styleUrls: ['./mouse-position.component.scss']
})
export class MousePositionComponent implements OnInit {
  positionX: number = 0;
  positionY: number = 0;

  ngOnInit(): void {
    fromEvent(document.body, 'mousemove').subscribe((e: Event) => {
      const mouseEvent: MouseEvent = e as MouseEvent;
      this.positionX = mouseEvent.x;
      this.positionY = mouseEvent.y;
    })
  }
}
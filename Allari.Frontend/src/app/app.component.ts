import { Component } from '@angular/core';
import { AnimalService } from './services/animal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'allari';
  animals: Array<string> = [];

  constructor(private animalService: AnimalService) { 
    this.getAnimals();
  }

  public getAnimals(): void {
    this.animalService.getAnimals().subscribe((response) => {
      this.animals = response;
    });
  }
}

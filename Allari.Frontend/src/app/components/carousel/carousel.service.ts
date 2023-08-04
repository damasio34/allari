import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CarouselItem } from './carousel-item';
import { Observable } from 'rxjs/internal/Observable';

const URL = '../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {  
  
  constructor(private http: HttpClient) {}
  
  getData(): Observable<CarouselItem[]> {
    return this.http.get<CarouselItem[]>(URL);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) {}

  getAnimals(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.API_URL}/animals`);
  }
}

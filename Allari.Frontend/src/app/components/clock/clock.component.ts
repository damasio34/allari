import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  time: string = "00:00:00";

  ngOnInit(): void {
    setInterval(() => {
      this.time = this.getCurrentTime();
    }, 1000);

    this.time = this.getCurrentTime();
  }  

  public getCurrentTime(): string {
    const now = new Date();
    let hour = now.getHours();
    let mins = now.getMinutes();
    let seconds = now.getSeconds();
    
    return `${hour}:${mins}:${seconds}`;
  }
}
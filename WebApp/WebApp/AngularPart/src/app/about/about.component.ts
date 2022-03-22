import { Input, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  template: '<p> Current Time is: {{getTime()}}</p>',
  styleUrls: ['./about.component.sass']
})

export class AboutComponent implements OnInit, OnDestroy{
  time: Date = new Date();
  private intervalID: number = 0;

  constructor() { }


  ngOnInit(): void {
    this.intervalID = window.setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    window.clearInterval(this.intervalID);
  }
  getTime(): string {
    return `${this.time.getHours()}:${this.time.getMinutes()}:${this.time.getSeconds()}`;
  }

}

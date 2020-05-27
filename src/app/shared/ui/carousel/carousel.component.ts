import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() images: string[] = []
  @Input() maxWidth: number = 30

  public currentIndex: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  move(step: number = 0) {
    let loopToTheEndOfArray = this.currentIndex === 0 && step < 0
    if (loopToTheEndOfArray) {
      this.currentIndex = this.images.length - 1
    } else {
      this.currentIndex = (this.currentIndex + step) % this.images.length
    }
  }

}

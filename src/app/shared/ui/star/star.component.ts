import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() rating: number = 3
  @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>()

  ngOnInit(): void {
  }

  public onClick(value: number): void {
    console.log('The clicked value is', value)
    this.ratingClicked.emit(value)
  }

}

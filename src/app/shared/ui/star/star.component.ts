import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() rating: number = 3

  constructor() { }

  ngOnInit(): void {
  }

  public logIt(value: number): void {
    console.log('The clicked value is', value)
  }

}

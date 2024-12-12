import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() maxStars: number = 5; // Número total de estrelas
  @Input() rating: number = 0;  // Avaliação atual
  @Output() ratingChange = new EventEmitter<number>(); // Emite o valor da avaliação

  stars: number[] = [];

  constructor() {
    this.stars = Array(this.maxStars).fill(0);
  }

  rate(star: number): void {
    this.rating = star;
    this.ratingChange.emit(this.rating);
  }
}

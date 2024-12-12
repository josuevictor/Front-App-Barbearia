import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agendamento';
  userRating: number = 3; // Avaliação inicial

  // Método para atualizar a avaliação
  onRatingChange(newRating: number) {
    this.userRating = newRating;
    console.log('Nova avaliação:', newRating);
  }
}

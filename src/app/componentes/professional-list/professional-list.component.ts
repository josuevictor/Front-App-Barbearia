import { Component } from '@angular/core';

@Component({
  selector: 'app-professional-list',
  templateUrl: './professional-list.component.html',
  styleUrls: ['./professional-list.component.css']
})
export class ProfessionalListComponent {
  professionals = [
    { name: 'Fulano de Tal', rating: 4 },
    { name: 'Fulano da silva', rating: 5 },
    { name: 'Fulano dos santos', rating: 5 },
    { name: 'Fulano de Tal', rating: 5 },
    { name: 'Fulano de Tal', rating: 5 },
    { name: 'Fulano dos santos', rating: 5 },
    { name: 'Fulano de Tal', rating: 5 },
    { name: 'Fulano de Tal', rating: 5 },

  ];
}

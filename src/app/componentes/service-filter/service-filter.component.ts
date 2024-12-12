import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-filter',
  templateUrl: './service-filter.component.html',
  styleUrls: ['./service-filter.component.css']
})
export class ServiceFilterComponent implements OnInit {

  items = ['Cabelo', 'Barba', 'Bigode', 'Hidratação', 'Máquina', 'Tesoura', 'Cabelo', 'Barba', 'Bigode', 'Hidratação', 'Máquina', 'Tesoura',];

  constructor() { }

  ngOnInit(): void {


  }

  

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent implements OnInit {

  titulo: string = 'LISTADO DE COMIDAS';
  comidas: string[] = ['Fabada', 'Arroz Negro', 'Callos', 'Patatas fritas', 'Tortilla'];

  borrarComidas(): void{
    this.comidas.splice(0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

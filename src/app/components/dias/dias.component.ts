import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.css']
})
export class DiasComponent implements OnInit {

  titulo: string = 'LISTADO DE DÍAS';
  dias: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  borrarDia(): void{
    this.dias.pop();
  }

  borrarDias(): void{
    this.dias.splice(0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

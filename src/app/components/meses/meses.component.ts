import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meses',
  templateUrl: './meses.component.html',
  styleUrls: ['./meses.component.css']
})
export class MesesComponent implements OnInit {

  titulo: string = 'LISTADO DE MESES';
  meses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];

  borrarMes(): void{
    this.meses.pop();
  }

  constructor() { }

  ngOnInit(): void {
  }

}

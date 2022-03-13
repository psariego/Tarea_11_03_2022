import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  titulo: string = 'LISTADO DE CIUDADES';
  ciudades: string[] = [];
  ciudadesBorradas: string[] = [];
  ciudadBorrada: string;

  mostrarCiudades(): void{
    this.ciudades = ['Gijón', 'Oviedo', 'Madrid', 'Lugo', 'Barcelona', 'Sevilla'];
  }

  borrarCiudades(): void{
    if (this.ciudades.length !=0) {
      this.ciudadBorrada = this.ciudades.pop();
      this.ciudadesBorradas.push(this.ciudadBorrada);
    }

    console.log(this.ciudades);
    console.log(this.ciudadesBorradas);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

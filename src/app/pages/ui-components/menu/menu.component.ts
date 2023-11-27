import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class AppMenuComponent {

  agente: string;

  asignarDatos(nombreAgente: string) {
    this.agente = nombreAgente;
  }

  constructor() { }
 
}

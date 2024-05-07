import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-estaciones-del-anio',
  templateUrl: './estaciones-del-anio.component.html',
  styleUrl: './estaciones-del-anio.component.css'
})
export class EstacionesDelAnioComponent {
  expression:boolean=false;
  titulo_EstacionDelAnio: string = 'Estaciones del anio component';
  estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno'];
  estacionSeleccionada = 'Primavera';

  @Input() titulo_EstacionDelAnioI: string = '';
  @Output() enviar_EstacionDelAnio = new EventEmitter<string>();

  enviarMensaje_EstacionDelAnio() {
    this.enviar_EstacionDelAnio.emit(this.titulo_EstacionDelAnio);
    if(this.expression==false){
      this.expression=true;
    }else{ this.expression=false;}
  }
}

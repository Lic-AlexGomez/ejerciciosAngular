import { Component } from '@angular/core';

@Component({
  selector: 'app-meses-del-anio',
  templateUrl: './meses-del-anio.component.html',
  styleUrl: './meses-del-anio.component.css'
})
export class MesesDelAnioComponent {
  color: string = 'verde';

 meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
         'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

}

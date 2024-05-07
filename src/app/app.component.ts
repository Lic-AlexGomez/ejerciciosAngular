import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
  titulo_appMain = 'APP Component';

  mensajeRecibido: string=""



  recibirMensaje(mensaje:string){
    this.mensajeRecibido = mensaje;
  }



  condicion:boolean = false;
  appToMenu(){
    if(this.condicion==false){
      this.condicion=true;
    }else{ this.condicion=false;}

  }
}

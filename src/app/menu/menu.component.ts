import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  expression:boolean=false;
  expressio:boolean=false;
  titulo_menuE: string = 'Menu component';

  @Input() titulo_menu: string = '';
  @Output() enviar_menu = new EventEmitter<string>();
  mensajeRecibid: string="";


  enviarMensaje_menu() {
    this.enviar_menu.emit(this.titulo_menuE);
    if(this.expression==false){
      this.expression=true;
    }else{ this.expression=false;}
  }
  validad(){

    if(this.expressio==false){
      this.expressio=true;
    }else{ this.expressio=false;}
  }
  recibirMensaj(mensaj:string){
    this.mensajeRecibid = mensaj;
  }
}

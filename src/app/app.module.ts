import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { MesesDelAnioComponent } from './meses-del-anio/meses-del-anio.component';
import { EstacionesDelAnioComponent } from './estaciones-del-anio/estaciones-del-anio.component';
import { SizeComponent } from './size/size.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MensajeComponent,
    MesesDelAnioComponent,
    EstacionesDelAnioComponent,
    SizeComponent,
    MenuComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

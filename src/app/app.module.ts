import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MenuComponent } from './menu/menu.component';
import { OutraComponent } from './outra/outra.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    MenuComponent,
    OutraComponent
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { OutraComponent } from './outra/outra.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicial', pathMatch: 'full'},
  {path: 'inicial', component: OutraComponent},
  {path: 'calc', component: CalculadoraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

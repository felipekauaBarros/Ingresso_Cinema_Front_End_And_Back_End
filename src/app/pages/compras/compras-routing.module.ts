import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarComprasIngressos} from "./listar-compras-ingresso/listar-compras-ingressos";
import {HomeCompraIngressoComponent} from "./home-compra-ingresso/home-compra-ingresso.component";
export const Comprasroutes: Routes = [
  {
  path: "comprar",
  component: HomeCompraIngressoComponent,
    children:[
      {
        path: "",
        component: ListarComprasIngressos
      }
    ]

  }
];

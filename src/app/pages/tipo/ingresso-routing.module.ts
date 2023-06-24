import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeIngressoComponent} from "./home-tipo/home-ingresso.component";
import {ListIngressoComponent} from "./list-tipo/list-ingresso.component";
import {FormIngressoComponent} from "./form-tipo/form-ingresso.component";

export const tipoRoutes: Routes = [
  {
    path: "ingresso",
    component: HomeIngressoComponent,
    children: [
      {
        path: "",
        component: ListIngressoComponent
      },
      {
        path: "novo",
        component: FormIngressoComponent
      },
      {
        path: ":idCodigo",
        component: FormIngressoComponent
      }
    ]
  }
];


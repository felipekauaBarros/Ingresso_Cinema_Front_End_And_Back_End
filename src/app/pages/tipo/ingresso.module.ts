import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListIngressoComponent } from './list-tipo/list-ingresso.component';
import { HomeIngressoComponent } from './home-tipo/home-ingresso.component';
import {RouterModule} from "@angular/router";
import {tipoRoutes} from "./ingresso-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {FormIngressoComponent } from './form-tipo/form-ingresso.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    ListIngressoComponent,
    HomeIngressoComponent,
    FormIngressoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(tipoRoutes),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule
  ]
})
export class IngressoModule { }

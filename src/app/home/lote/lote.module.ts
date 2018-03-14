import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoteComponent } from './lote.component';

import { LoteRoutingModule } from './lote-routing.module';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        LoteRoutingModule

    ],
    declarations: [LoteComponent],
    providers: [
  ]
})
export class LoteModule { }
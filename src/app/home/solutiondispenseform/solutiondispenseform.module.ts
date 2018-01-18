import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolutionDispenseFormRoutingModule } from './solutiondispenseform-routing.module';
import { SolutionDispenseFormComponent } from './solutiondispenseform.component';

import { NestedFormComponent, ItemsFormArrayComponent, ItemFormControlComponent } from './nested-form.component'

@NgModule({
    imports: [
        CommonModule,
        SolutionDispenseFormRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [SolutionDispenseFormComponent, NestedFormComponent, ItemsFormArrayComponent, ItemFormControlComponent],
    providers: [
  ]
})
export class SolutionDispenseFormModule { }
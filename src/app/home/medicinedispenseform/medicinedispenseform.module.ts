import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicineDispenseFormRoutingModule } from './medicinedispenseform-routing.module';
import { MedicineDispenseFormComponent } from './medicinedispenseform.component';

import { NestedFormComponent, ItemsFormArrayComponent, ItemFormControlComponent } from './nested-form.component'

@NgModule({
    imports: [
        CommonModule,
        MedicineDispenseFormRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [MedicineDispenseFormComponent, NestedFormComponent, ItemsFormArrayComponent, ItemFormControlComponent],
    providers: [
  ]
})
export class MedicineDispenseFormModule { }
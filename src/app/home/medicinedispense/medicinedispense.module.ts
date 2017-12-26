import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicineDispenseRoutingModule } from './medicinedispense-routing.module';
import { MedicineDispenseComponent } from './medicinedispense.component';

import { MedicineDispenseService } from '../../services/medicinedispense.service';


@NgModule({
    imports: [
        CommonModule,
        MedicineDispenseRoutingModule,
        ReactiveFormsModule,
        FormsModule

    ],
    declarations: [MedicineDispenseComponent],
    providers: [
    MedicineDispenseService
  ]
})
export class MedicineDispenseModule { }
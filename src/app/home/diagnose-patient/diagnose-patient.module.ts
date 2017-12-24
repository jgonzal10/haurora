import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiagnosePatientRoutingModule } from './diagnose-patient-routing.module';
import { DiagnosePatientComponent } from './diagnose-patient.component';

@NgModule({
    imports: [
        CommonModule, ReactiveFormsModule,
        DiagnosePatientRoutingModule,
    ],
    declarations: [DiagnosePatientComponent],
        providers: [
    
  ]
})
export class DiagnosePatientModule { }

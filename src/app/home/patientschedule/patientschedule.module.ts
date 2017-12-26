import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientScheduleRoutingModule } from './patientschedule-routing.module';
import { PatientScheduleComponent } from './patientschedule.component';


@NgModule({
    imports: [
        CommonModule,
        PatientScheduleRoutingModule,
        ReactiveFormsModule,
        FormsModule

    ],
    declarations: [PatientScheduleComponent],
    providers: [
  ]
})
export class PatientScheduleModule { }
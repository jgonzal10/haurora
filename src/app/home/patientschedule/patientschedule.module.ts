import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientScheduleRoutingModule } from './patientschedule-routing.module';
import { PatientScheduleComponent } from './patientschedule.component';
import {FilterPipe} from "../../pipes/pipes";

@NgModule({
    imports: [
        CommonModule,
        PatientScheduleRoutingModule,
        ReactiveFormsModule,
        FormsModule

    ],
    declarations: [PatientScheduleComponent, FilterPipe],
    providers: [
  ]
})
export class PatientScheduleModule { }
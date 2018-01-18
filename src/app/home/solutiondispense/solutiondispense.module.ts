import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolutionDispenseRoutingModule } from './solutiondispense-routing.module';
import { SolutionDispenseComponent } from './solutiondispense.component';

import { SolutionDispenseService } from '../../services/solutiondispense.service';


@NgModule({
    imports: [
        CommonModule,
        SolutionDispenseRoutingModule,
        ReactiveFormsModule,
        FormsModule

    ],
    declarations: [SolutionDispenseComponent],
    providers: [
    SolutionDispenseService
  ]
})
export class SolutionDispenseModule { }
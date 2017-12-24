import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        CommonModule, ReactiveFormsModule,
        DashboardRoutingModule,
    ],
    declarations: [DashboardComponent],
        providers: [
    
  ]
})
export class DashboardModule { }

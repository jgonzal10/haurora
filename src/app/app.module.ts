import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyTableComponent } from './my-table/my-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatInputModule, MatNativeDateModule,MatDatepickerModule,MatMenuModule,MatRadioModule,MatCardModule,MatFormFieldModule,MatSelectModule,MatOptionModule } from '@angular/material';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { DiagnosePatientComponent } from './diagnose-patient/diagnose-patient.component';
import { PatientScheduleComponent } from './patient-schedule/patient-schedule.component';
import { MedicineDispenseComponent } from './medicine-dispense/medicine-dispense.component';
import { SolutionDispenseComponent } from './solution-dispense/solution-dispense.component';
import { ProductionComponent } from './production/production.component';
import { PreparationsComponent } from './preparations/preparations.component';


const appRoutes: Routes = [
  { path: 'diagnose-patient', component: DiagnosePatientComponent },
  { path: 'patientschedule', component: PatientScheduleComponent },
  { path: 'medicinedispense', component: MedicineDispenseComponent },
  { path: 'solutiondispense', component: SolutionDispenseComponent },
  { path: 'production', component: ProductionComponent },
  { path: 'preparations', component: PreparationsComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    MyNavComponent,
    DiagnosePatientComponent,
    PatientScheduleComponent,
    MedicineDispenseComponent,
    SolutionDispenseComponent,
    ProductionComponent,
    PreparationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,      
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    HttpClientModule,
    MatNativeDateModule, 
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

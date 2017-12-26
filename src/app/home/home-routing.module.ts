import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'diagnosepatient', loadChildren: './diagnose-patient/diagnose-patient.module#DiagnosePatientModule' },
            { path: 'diagnosis', loadChildren: './diagnosis/diagnosis.module#DiagnosisModule' },
            { path: 'patientschedule', loadChildren: './patientschedule/patientschedule.module#PatientScheduleModule' },
            { path: 'medicinedispense', loadChildren: './medicinedispense/medicinedispense.module#MedicineDispenseModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }

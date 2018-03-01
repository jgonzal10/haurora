import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [

            { path: 'preparations', loadChildren: './preparations/preparations.module#PreparationsModule' },
            { path: 'lote', loadChildren: './lote/lote.module#LoteModule' },
            { path: 'production', loadChildren: './production/production.module#ProductionModule' },

            { path: 'diagnosepatient', loadChildren: './diagnose-patient/diagnose-patient.module#DiagnosePatientModule' },
            { path: 'diagnosis', loadChildren: './diagnosis/diagnosis.module#DiagnosisModule' },
            { path: 'patientschedule', loadChildren: './patientschedule/patientschedule.module#PatientScheduleModule' },
            { path: 'medicinedispense', loadChildren: './medicinedispense/medicinedispense.module#MedicineDispenseModule' },
            { path: 'medicinedispenseform', loadChildren: './medicinedispenseform/medicinedispenseform.module#MedicineDispenseFormModule' },
            { path: 'solutiondispense', loadChildren: './solutiondispense/solutiondispense.module#SolutionDispenseModule' },
            { path: 'solutiondispenseform', loadChildren: './solutiondispenseform/solutiondispenseform.module#SolutionDispenseFormModule' },
            { path: 'editschema/:patient', loadChildren: './editschema/editschema.module#EditschemaModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }

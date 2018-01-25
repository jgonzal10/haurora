import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreparationsComponent } from './preparations.component';


const routes: Routes = [
    { path: '', component: PreparationsComponent,
        children: [

        //    { path: 'loteassignment', loadChildren: './loteassignment/loteassignment.module#LoteassignmentModule' }
        ]},
   // { path: 'loteassignment', loadChildren: './loteassignment/loteassignment.module#LoteassignmentModule' },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreparationRoutingModule { }


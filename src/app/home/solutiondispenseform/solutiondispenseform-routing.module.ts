import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutionDispenseFormComponent } from './solutiondispenseform.component';

const routes: Routes = [
    { path: '', component: SolutionDispenseFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionDispenseFormRoutingModule { }
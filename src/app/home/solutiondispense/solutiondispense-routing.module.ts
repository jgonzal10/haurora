import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutionDispenseComponent } from './solutiondispense.component';


const routes: Routes = [
    { path: '', component: SolutionDispenseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionDispenseRoutingModule { }
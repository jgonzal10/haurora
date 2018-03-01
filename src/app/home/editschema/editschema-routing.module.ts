import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditschemaComponent } from './editschema.component';

const routes: Routes = [
    { path: '', component: EditschemaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditschemaRoutingModule { }
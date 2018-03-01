import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditschemaRoutingModule } from './editschema-routing.module';
import { EditschemaComponent } from './editschema.component';

import { EditschemaNestedFormComponent, ItemsFormArrayComponent, ItemFormControlComponent } from './editschemanested-form.component'


@NgModule({
    imports: [
        CommonModule,
        EditschemaRoutingModule,
        ReactiveFormsModule,
        FormsModule

    ],
    declarations: [EditschemaComponent, EditschemaNestedFormComponent, ItemsFormArrayComponent, ItemFormControlComponent],
    providers: [
  ]
})
export class EditschemaModule { }
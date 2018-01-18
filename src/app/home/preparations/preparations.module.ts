import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreparationRoutingModule } from './preparations-routing.module';
import { PreparationsComponent } from './preparations.component';
import { PreparationService } from '../../services/preparation.service';

@NgModule({
    imports: [
        CommonModule,
        PreparationRoutingModule 
    ],
    declarations: [PreparationsComponent],
    providers: [
    PreparationService
  ]
})
export class PreparationsModule { }

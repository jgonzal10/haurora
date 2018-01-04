import { Component, OnInit } from '@angular/core';
import {PreparationService} from "../../services/preparation.service";
import {Preparation} from "../../models/preparation";
@Component({
  selector: 'app-preparations',
  templateUrl: './preparations.component.html',
  styleUrls: ['./preparations.component.css']
})
export class PreparationsComponent implements OnInit {

//TODO
//CREATE THE LOTE ASSIGNATION PAGE

  public preparations: Preparation[] = [{  preparationId: 1,
  medicineId: 2,
  medicineName: 'FLUORACILO',
  medicineConcentration: '100',
  medicineDispensationId: 2,
  medicineDispensationQuantity: 1,
  solutionDispensationId: 1,
  solutionDispensationQuantity: 10,
  deviceDispensationId: 10,
  stability: 8,
  expirationDate: '04/02/2018',
  state: 'Progress',
  acummulatedDoses: '200',
  acummulatedApplications: '3' },{  preparationId: 2,
  medicineId: 2,
  medicineName: 'CISPLATINO',
  medicineConcentration: '200',
  medicineDispensationId: 2,
  medicineDispensationQuantity: 1,
  solutionDispensationId: 1,
  solutionDispensationQuantity: 10,
  deviceDispensationId: 10,
  stability: 8,
  expirationDate: '04/02/2018',
  state: 'Progress',
  acummulatedDoses: '200',
  acummulatedApplications: '3' },{  preparationId: 3,
  medicineId: 2,
  medicineName: 'ONDANSETRON',
  medicineConcentration: '300',
  medicineDispensationId: 2,
  medicineDispensationQuantity: 1,
  solutionDispensationId: 1,
  solutionDispensationQuantity: 10,
  deviceDispensationId: 10,
  stability: 8,
  expirationDate: '04/02/2018',
  state: 'Progress',
  acummulatedDoses: '200',
  acummulatedApplications: '3' },{  preparationId: 4,
  medicineId: 2,
  medicineName: 'DEXAMETASONA',
  medicineConcentration: '600',
  medicineDispensationId: 2,
  medicineDispensationQuantity: 1,
  solutionDispensationId: 1,
  solutionDispensationQuantity: 10,
  deviceDispensationId: 10,
  stability: 8,
  expirationDate: '04/02/2018',
  state: 'Progress',
  acummulatedDoses: '200',
  acummulatedApplications: '3' }];
  public medicines: Preparation[] = [];
  constructor(private preparationService: PreparationService) { }

  ngOnInit() {
      this.preparationService.getTodaysPreparations()
      .subscribe(data => this.preparations = data);
  }

}

import { Component, OnInit } from '@angular/core';
import {PreparationService} from "../../services/preparation.service";
import {Preparation} from "../../models/preparation";
@Component({
  selector: 'app-preparations',
  templateUrl: './preparations.component.html',
  styleUrls: ['./preparations.component.css']
})
export class PreparationsComponent implements OnInit {
  public preparations: Preparation[] = [{  preparationId: 1,
  practicalDoseId: 2,
  dispenseId: 3,
  finalVolume: '450',
  roundedVolume: '500',
  state: 'A',
  medicineConcentration: '500',
  stability: '2',
  acummulatedDoses: '200',
  acummulatedApplications: '3',
  preparationDate: '02/02/2018',
  expirationDate: '04/02/2018',
  stateDate: 'hola'}];
  public medicines: Preparation[] = [];
  constructor(private preparationService: PreparationService) { }

  ngOnInit() {
      this.preparationService.getTodaysPreparations()
      .subscribe(data => this.preparations = data);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Preparation} from "../../models/preparation";


@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {
  setClickedRow : Function;
  selectedPreparation : Preparation;

    public productions: Preparation[] = [
  {  preparationId: 1,
  patientName:"Ana Gomez",
  medicineId: 2,
  medicineName: 'FLUORACILO',
  medicineConcentration: '4000',
  volume: '4000',finalVolume:'250',
  medicineDispensationId: 2,
  medicineDispensationQuantity: 1,
  solutionDispensationId: 1,
  solutionDispensationQuantity: 1,
  deviceDispensationId: 1,
  stability: 8,
  expirationDate: '08/06/2018',
  state: 'Progress',
  acummulatedDoses: '4000',
  acummulatedApplications: '1' },
  {  preparationId: 2,
  patientName:"Ana Gomez",
  medicineId: 2,
  medicineName: 'CISPLATINO',
  medicineConcentration: '80',
  volume: '80',finalVolume:'250',
  medicineDispensationId: 2,
  medicineDispensationQuantity: 1,
  solutionDispensationId: 1,
  solutionDispensationQuantity: 10,
  deviceDispensationId: 10,
  stability: 8,
  expirationDate: '08/06/2018',
  state: 'Progress',
  acummulatedDoses: '80',
  acummulatedApplications: '1' },{  preparationId: 3,
  patientName:"Ana Gomez",
  medicineId: 2,
  medicineName: 'ONDANSETRON',
  medicineConcentration: '16',
  volume: '16',finalVolume:'250',
  medicineDispensationId: 2,
  medicineDispensationQuantity: 1,
  solutionDispensationId: 1,
  solutionDispensationQuantity: 1,
  deviceDispensationId: 10,
  stability: 8,
  expirationDate: '08/06/2018',
  state: 'Progress',
  acummulatedDoses: '16',
  acummulatedApplications: '1' },
  {  preparationId: 4,
  patientName:"Ana Gomez",
  medicineId: 2,
  medicineName: 'DEXAMETASONA',
  medicineConcentration: '8',
  volume: '8',finalVolume:'250',
  medicineDispensationId: 2,
  medicineDispensationQuantity: 1,
  solutionDispensationId: 1,
  solutionDispensationQuantity: 1,
  deviceDispensationId: 10,
  stability: 8,
  expirationDate: '08/06/2018',
  state: 'Progress',
  acummulatedDoses: '8',
  acummulatedApplications: '1' },
  {  preparationId: 5,
  patientName:"Ana Gomez",
  medicineId: 2,
  medicineName: 'APREPITANT',
  medicineConcentration: '310',
  volume: '310',finalVolume:'',
  medicineDispensationId: 2,
  medicineDispensationQuantity: 1,
  solutionDispensationId: 1,
  solutionDispensationQuantity: 1,
  deviceDispensationId: 1,
  stability: 8,
  expirationDate: '08/06/2018',
  state: 'Progress',
  acummulatedDoses: '310',
  acummulatedApplications: '1' },
  { preparationId: 6,
  patientName:"Ana Gomez",
  medicineId: 2,
  medicineName: 'CLORURO DE POTASIO',
  medicineConcentration: '10',
  volume: '10',finalVolume:'',
  medicineDispensationId: 2,
  medicineDispensationQuantity: 1,
  solutionDispensationId: 1,
  solutionDispensationQuantity: 1,
  deviceDispensationId: 1,
  stability: 8,
  expirationDate: '08/06/2018',
  state: 'Progress',
  acummulatedDoses: '10',
  acummulatedApplications: '1' },
    { preparationId: 7,
  patientName:"Ana Gomez",
  medicineId: 2,
  medicineName: 'SULFATO DE MAGNESIO',
  medicineConcentration: '10',
  volume: '10',finalVolume:'',
  medicineDispensationId: 2,
  medicineDispensationQuantity: 1,
  solutionDispensationId: 1,
  solutionDispensationQuantity: 1,
  deviceDispensationId: 1,
  stability: 8,
  expirationDate: '08/06/2018',
  state: 'Progress',
  acummulatedDoses: '10',
  acummulatedApplications: '1' },
    { preparationId: 8,
  patientName:"Ana Gomez",
  medicineId: 2,
  medicineName: 'SULFATO DE MAGNESIO',
  medicineConcentration: '10',
  volume: '10',finalVolume:'',
  medicineDispensationId: 2,
  medicineDispensationQuantity: 1,
  solutionDispensationId: 1,
  solutionDispensationQuantity: 1,
  deviceDispensationId: 1,
  stability: 8,
  expirationDate: '08/06/2018',
  state: 'Progress',
  acummulatedDoses: '10',
  acummulatedApplications: '1' }
  ];

  constructor(private router: Router) {

    this.setClickedRow = function(preparation:Preparation){
            this.selectedPreparation = preparation;
            console.log(this.selectedPreparation)}

            }

  ngOnInit() {


  }


   public selectr() {
   console.log('assignment')

  }

}

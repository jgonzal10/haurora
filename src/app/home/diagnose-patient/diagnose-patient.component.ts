import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {Patient} from "../../models/patient";
import {Diagnose} from "../../models/diagnose";
import {Schema} from "../../models/schema";


import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-diagnose-patient',
  templateUrl: './diagnose-patient.component.html',
  styleUrls: ['./diagnose-patient.component.css']
})
export class DiagnosePatientComponent implements OnInit {
 public myForm: FormGroup;
 selDiagnose: any= null;
// patients : any[]=[];
// diagnosis : any[]=[];
 //schemas : any[]=[];


  public patients: Patient[] = [
  {patientId:1,patientName:"Ana",patientLastName:"Gomez",patientGender:"F",patientAge:30,patientWeight:"60",patientHeight:"1.60",patientCorporalSurfice:"",idNumber:"12345678"},{patientId:2,patientName:"Marcos",patientLastName:"Fernandes",patientGender:"M",patientAge:40,patientWeight:"90",patientHeight:"1.75",patientCorporalSurfice:"",idNumber:"434534533"}];
  private result : any[] = [];


public diagnosis: Diagnose[] = [{diagnosisId:1,diagnosisName:"Diagnostico A"},{diagnosisId:2,diagnosisName:"Diagnostico B"}];



  public schemas: Schema[] = [{schemaId:1,schemaName:"Esquema X",schemaCycles:3,schemaIntervalCycles:4,schemaTotalDays:24},
  {schemaId:2,schemaName:"Esquema Y",schemaCycles:4,schemaIntervalCycles:6,schemaTotalDays:12}];
 
  constructor(private _fb: FormBuilder,private router: Router) { }

  ngOnInit() {


  		this.myForm = this._fb.group({
            patientId: [''],
            diagnoseId: [''],
            schemaId: [''],
            initialDay: ['']

        });



  }

      diagnose(inf:any) {

        let dados2 =inf;
        console.log(dados2);


    }

    onChangeDiagnose(diagnoseValue: any) {
    console.log('here we go')
    this.selDiagnose = diagnoseValue;
     console.log(diagnoseValue);

}

}

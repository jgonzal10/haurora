import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { PersonalizedSchema } from '../../models/personalizedschema';

@Component({
  selector: 'app-editschema',
  templateUrl: './editschema.component.html',
  styleUrls: ['./editschema.component.scss']
})
export class EditschemaComponent implements OnInit {
 	myForm: FormGroup;

  personalizedSchemaValues: PersonalizedSchema[]=[];
  constructor(private route: ActivatedRoute,
  private router: Router,private _fb: FormBuilder) { }

  ngOnInit() {

      this.myForm = this._fb.group({
            medicine: ['1/FLUORACILO'],
            date: ['08/12/2017'],
            dose: ['50.0'],
            volume: ['78']

        });

this.personalizedSchemaValues=[
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"FLUORACILO",cycle:1,applicationDay:1,applicationDate:"2018-06-08",theoricalDose:"4000", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:10},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"CISPLATINO",cycle:1,applicationDay:1,applicationDate:"2018-06-08",theoricalDose:"80", solutionId:1, solutionGenericName:"SNN", finalVolume:"250",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"ONDANSETRON",cycle:1,applicationDay:1,applicationDate:"2018-06-08",theoricalDose:"16", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"DEXAMETASONA",cycle:1,applicationDay:1,applicationDate:"2018-06-08",theoricalDose:"8", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"APREPITANT",cycle:1,applicationDay:1,applicationDate:"2018-06-08",theoricalDose:"310", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"CLORURO DE POTASIO",cycle:1,applicationDay:1,applicationDate:"2018-06-08",theoricalDose:"10", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:1}
    ,{personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"SULFATO DE MAGNESIO",cycle:1,applicationDay:1,applicationDate:"2018-06-08",theoricalDose:"10", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:1},
    {personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"ONDANSETRON",cycle:1,applicationDay:1,applicationDate:"2018-06-08",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:1},
    {personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"APREPITANT",cycle:1,applicationDay:3,applicationDate:"2018-06-09",theoricalDose:"310", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"ONDANSETRON",cycle:1,applicationDay:2,applicationDate:"2018-06-09",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:10},
    {personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"APREPITANT",cycle:1,applicationDay:3,applicationDate:"2018-06-10",theoricalDose:"310", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"ONDANSETRON",cycle:1,applicationDay:2,applicationDate:"2018-06-10",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:10},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"ONDANSETRON",cycle:1,applicationDay:2,applicationDate:"2018-06-11",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:10},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"ONDANSETRON",cycle:1,applicationDay:2,applicationDate:"2018-06-12",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:10},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"FLUORACILO",cycle:2,applicationDay:1,applicationDate:"2018-06-22",theoricalDose:"4000", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:10},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"CISPLATINO",cycle:2,applicationDay:1,applicationDate:"2018-06-22",theoricalDose:"80", solutionId:1, solutionGenericName:"SNN", finalVolume:"250",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"ONDANSETRON",cycle:2,applicationDay:1,applicationDate:"2018-06-22",theoricalDose:"16", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"DEXAMETASONA",cycle:2,applicationDay:1,applicationDate:"2018-06-22",theoricalDose:"8", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"APREPITANT",cycle:2,applicationDay:1,applicationDate:"2018-06-22",theoricalDose:"310", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"CLORURO DE POTASIO",cycle:2,applicationDay:1,applicationDate:"2018-06-22",theoricalDose:"10", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:1}
    ,{personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"SULFATO DE MAGNESIO",cycle:2,applicationDay:1,applicationDate:"2018-06-22",theoricalDose:"10", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:1},
    {personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"ONDANSETRON",cycle:2,applicationDay:1,applicationDate:"2018-06-22",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:1},
    {personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"APREPITANT",cycle:2,applicationDay:3,applicationDate:"2018-06-23",theoricalDose:"310", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"ONDANSETRON",cycle:2,applicationDay:2,applicationDate:"2018-06-23",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:10},
    {personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"APREPITANT",cycle:2,applicationDay:3,applicationDate:"2018-06-24",theoricalDose:"310", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"ONDANSETRON",cycle:2,applicationDay:2,applicationDate:"2018-06-24",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:10},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"ONDANSETRON",cycle:2,applicationDay:2,applicationDate:"2018-06-25",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:10},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"ONDANSETRON",cycle:2,applicationDay:2,applicationDate:"2018-06-26",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:10},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"FLUORACILO",cycle:3,applicationDay:1,applicationDate:"2018-07-06",theoricalDose:"4000", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:10},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"CISPLATINO",cycle:3,applicationDay:1,applicationDate:"2018-07-06",theoricalDose:"80", solutionId:1, solutionGenericName:"SNN", finalVolume:"250",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"ONDANSETRON",cycle:3,applicationDay:1,applicationDate:"2018-07-06",theoricalDose:"16", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"DEXAMETASONA",cycle:3,applicationDay:1,applicationDate:"2018-07-06",theoricalDose:"8", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"APREPITANT",cycle:3,applicationDay:1,applicationDate:"2018-07-06",theoricalDose:"310", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"CLORURO DE POTASIO",cycle:3,applicationDay:1,applicationDate:"2018-07-06",theoricalDose:"10", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:1}
    ,{personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"SULFATO DE MAGNESIO",cycle:3,applicationDay:1,applicationDate:"2018-07-06",theoricalDose:"10", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:1},
    {personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"ONDANSETRON",cycle:3,applicationDay:1,applicationDate:"2018-07-06",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:1},
    {personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"APREPITANT",cycle:3,applicationDay:3,applicationDate:"2018-07-07",theoricalDose:"310", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"ONDANSETRON",cycle:3,applicationDay:2,applicationDate:"2018-07-07",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:10},
    {personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"APREPITANT",cycle:3,applicationDay:3,applicationDate:"2018-07-08",theoricalDose:"310", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"ONDANSETRON",cycle:3,applicationDay:2,applicationDate:"2018-07-08",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:10},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"ONDANSETRON",cycle:3,applicationDay:2,applicationDate:"2018-07-09",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:10},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"ONDANSETRON",cycle:3,applicationDay:2,applicationDate:"2018-07-10",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:10},
        {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"FLUORACILO",cycle:3,applicationDay:1,applicationDate:"2018-07-20",theoricalDose:"4000", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:10},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"CISPLATINO",cycle:3,applicationDay:1,applicationDate:"2018-07-20",theoricalDose:"80", solutionId:1, solutionGenericName:"SNN", finalVolume:"250",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"ONDANSETRON",cycle:3,applicationDay:1,applicationDate:"2018-07-20",theoricalDose:"16", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"DEXAMETASONA",cycle:3,applicationDay:1,applicationDate:"2018-07-20",theoricalDose:"8", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"APREPITANT",cycle:3,applicationDay:1,applicationDate:"2018-07-20",theoricalDose:"310", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"CLORURO DE POTASIO",cycle:3,applicationDay:1,applicationDate:"2018-07-20",theoricalDose:"10", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:1}
    ,{personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"SULFATO DE MAGNESIO",cycle:3,applicationDay:1,applicationDate:"2018-07-20",theoricalDose:"10", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:1},
    {personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"ONDANSETRON",cycle:3,applicationDay:1,applicationDate:"2018-07-20",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:1},
    {personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"APREPITANT",cycle:3,applicationDay:3,applicationDate:"2018-07-21",theoricalDose:"310", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"ONDANSETRON",cycle:3,applicationDay:2,applicationDate:"2018-07-21",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:10},
    {personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"APREPITANT",cycle:3,applicationDay:3,applicationDate:"2018-07-22",theoricalDose:"310", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"ONDANSETRON",cycle:3,applicationDay:2,applicationDate:"2018-07-22",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:10},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"ONDANSETRON",cycle:3,applicationDay:2,applicationDate:"2018-07-23",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:10},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"ONDANSETRON",cycle:3,applicationDay:2,applicationDate:"2018-07-23",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:10},
     {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"FLUORACILO",cycle:4,applicationDay:1,applicationDate:"2018-07-20",theoricalDose:"4000", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:10},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"CISPLATINO",cycle:4,applicationDay:1,applicationDate:"2018-07-20",theoricalDose:"80", solutionId:1, solutionGenericName:"SNN", finalVolume:"250",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"ONDANSETRON",cycle:4,applicationDay:1,applicationDate:"2018-07-20",theoricalDose:"16", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"DEXAMETASONA",cycle:4,applicationDay:1,applicationDate:"2018-07-20",theoricalDose:"8", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"APREPITANT",cycle:4,applicationDay:1,applicationDate:"2018-07-20",theoricalDose:"310", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"CLORURO DE POTASIO",cycle:4,applicationDay:1,applicationDate:"2018-07-20",theoricalDose:"10", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:1}
    ,{personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"SULFATO DE MAGNESIO",cycle:4,applicationDay:1,applicationDate:"2018-07-20",theoricalDose:"10", solutionId:3, solutionGenericName:"SNN", finalVolume:"250",deviceId:1},
    {personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"ONDANSETRON",cycle:4,applicationDay:1,applicationDate:"2018-07-20",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:1},
    {personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"APREPITANT",cycle:4,applicationDay:3,applicationDate:"2018-07-21",theoricalDose:"310", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"ONDANSETRON",cycle:4,applicationDay:2,applicationDate:"2018-07-21",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:10},
    {personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"APREPITANT",cycle:4,applicationDay:3,applicationDate:"2018-07-22",theoricalDose:"310", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"ONDANSETRON",cycle:4,applicationDay:2,applicationDate:"2018-07-22",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:10},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"ONDANSETRON",cycle:4,applicationDay:2,applicationDate:"2018-07-23",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:10},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"ONDANSETRON",cycle:4,applicationDay:2,applicationDate:"2018-07-24",theoricalDose:"8", solutionId:0, solutionGenericName:"SNN", finalVolume:"",deviceId:10},
];


        }
  	


}

import { el } from '@angular/platform-browser/testing/src/browser_util';
import { selector } from 'rxjs/operator/multicast';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild, VERSION } from '@angular/core';
import { PersonalizedSchema } from '../../models/personalizedschema';
import {Patient} from "../../models/patient";
import {FilterPipe} from "../../pipes/pipes";
import * as $ from 'jquery';

@Component({
  selector: 'app-patientschedule',
  templateUrl: './patientschedule.component.html',
  styleUrls: ['./patientschedule.component.css']
})
export class PatientScheduleComponent implements OnInit {
    term: number;
    public myForm: FormGroup;
    name:string;
    selectedPatient : Patient;
    setClickedRow : Function;

  public patients: Patient[] = [
  {patientId:1,patientName:"Ana",patientLastName:"Gomez",patientGender:"F",patientAge:30,patientWeight:"60",patientHeight:"1.60",patientCorporalSurfice:"",idNumber:"444444"},{patientId:2,patientName:"Marcos",patientLastName:"Fernandes",patientGender:"M",patientAge:40,patientWeight:"90",patientHeight:"1.75",patientCorporalSurfice:"",idNumber:"555555"}];
  private result : any[] = [];


    personalizedSchemaValues: PersonalizedSchema[]=[];

    constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router) {
      this.name = `Angular! v${VERSION.full}`
      console.log(this.name);
      this.setClickedRow = function(patient:Patient){
            this.selectedPatient = patient;
            console.log(this.selectedPatient);

      this.patients =[
      {patientId:this.selectedPatient.patientId,patientName:this.selectedPatient.patientName,patientLastName:this.selectedPatient.patientLastName,patientGender:this.selectedPatient.patientGender,patientAge:this.selectedPatient.patientAge,patientWeight:this.selectedPatient.patientWeight,patientHeight:this.selectedPatient.patientHeight,patientCorporalSurfice:this.selectedPatient.patientCorporalSurfice,idNumber:this.selectedPatient.idNumber}];

    if(this.selectedPatient !=null ){

        this.personalizedSchemaValues=[
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"FLUORACILO",cycle:1,applicationDay:1,applicationDate:"08/06/2018",theoricalDose:"50.0", solutionId:1, finalVolume:"78",deviceId:10},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"CISPLATINO",cycle:1,applicationDay:1,applicationDate:"08/06/2018",theoricalDose:"5.5", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"ONDANSETRON",cycle:1,applicationDay:1,applicationDate:"08/06/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"DEXAMETASONA",cycle:1,applicationDay:1,applicationDate:"08/06/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"APREPITANT",cycle:1,applicationDay:1,applicationDate:"08/06/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"CLORURO DE POTASIO",cycle:1,applicationDay:1,applicationDate:"08/06/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1}
    ,{personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"SULFATO DE MAGNESIO",cycle:1,applicationDay:1,applicationDate:"08/06/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"ONDANSETRON",cycle:1,applicationDay:1,applicationDate:"08/06/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1},
        {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"FLUORACILO",cycle:2,applicationDay:1,applicationDate:"08/07/2018",theoricalDose:"50.0", solutionId:1, finalVolume:"78",deviceId:10},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"CISPLATINO",cycle:2,applicationDay:1,applicationDate:"08/07/2018",theoricalDose:"5.5", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"ONDANSETRON",cycle:2,applicationDay:1,applicationDate:"08/07/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"DEXAMETASONA",cycle:2,applicationDay:1,applicationDate:"08/07/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"APREPITANT",cycle:2,applicationDay:1,applicationDate:"08/07/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"CLORURO DE POTASIO",cycle:2,applicationDay:1,applicationDate:"08/07/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1}
    ,{personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"SULFATO DE MAGNESIO",cycle:2,applicationDay:1,applicationDate:"08/07/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"ONDANSETRON",cycle:2,applicationDay:1,applicationDate:"08/07/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"FLUORACILO",cycle:3,applicationDay:1,applicationDate:"08/08/2018",theoricalDose:"50.0", solutionId:1, finalVolume:"78",deviceId:10},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"CISPLATINO",cycle:3,applicationDay:1,applicationDate:"08/08/2018",theoricalDose:"5.5", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"ONDANSETRON",cycle:3,applicationDay:1,applicationDate:"08/08/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"DEXAMETASONA",cycle:3,applicationDay:1,applicationDate:"08/08/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"APREPITANT",cycle:3,applicationDay:1,applicationDate:"08/08/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"CLORURO DE POTASIO",cycle:3,applicationDay:1,applicationDate:"08/12/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1}
    ,{personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"SULFATO DE MAGNESIO",cycle:3,applicationDay:1,applicationDate:"08/08/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"ONDANSETRON",cycle:3,applicationDay:1,applicationDate:"08/08/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:1,medicineGenericName:"FLUORACILO",cycle:4,applicationDay:1,applicationDate:"08/09/2018",theoricalDose:"50.0", solutionId:1, finalVolume:"78",deviceId:10},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"CISPLATINO",cycle:4,applicationDay:1,applicationDate:"08/09/2018",theoricalDose:"5.5", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"ONDANSETRON",cycle:4,applicationDay:1,applicationDate:"08/09/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"DEXAMETASONA",cycle:4,applicationDay:1,applicationDate:"08/09/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"APREPITANT",cycle:4,applicationDay:1,applicationDate:"08/09/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:1,schemaId:2,medicineId:2,medicineGenericName:"CLORURO DE POTASIO",cycle:4,applicationDay:1,applicationDate:"08/09/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1}
    ,{personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"SULFATO DE MAGNESIO",cycle:4,applicationDay:1,applicationDate:"08/09/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1},
    {personalizedSchemaId:1,patientId:2,schemaId:2,medicineId:2,medicineGenericName:"ONDANSETRON",cycle:4,applicationDay:1,applicationDate:"08/09/2018",theoricalDose:"175", solutionId:1, finalVolume:"500",deviceId:1}];
    
    }


    $("#editschema").removeAttr("hidden")
        }

     // 
    }



  ngOnInit() {

  }
//SearchUser(){}


    onRowSelect(event) {
       console.log(event.data );

    }

    onRowUnselect(event){
     console.log(event.data );
    }

    editschema(){
   
  
    if(this.selectedPatient !=null){
    console.log(this.selectedPatient.toString())
      this.router.navigate(['/home/editschema',this.selectedPatient.idNumber]);
    }

    
    }
}

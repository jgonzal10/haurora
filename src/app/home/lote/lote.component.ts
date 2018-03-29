import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {MedicineReference} from "../../models/medicinereference";
@Component({
  selector: 'app-lote',
  templateUrl: './lote.component.html',
  styleUrls: ['./lote.component.css']
})
export class LoteComponent implements OnInit {
 public myForm: FormGroup;

 public lotes : any[]=[{lote:"L0001/500mg"},{lote:"L0002/300mg"}]


  public medicines: MedicineReference[] = [
  {medicineReferenceId:1,medicineGenericName:"FLUORACILO",unity:"mg",factor:"sc",calRef:"f",via:"oral",presentation:"pre",maxDoseAplicated:"300mg/m2",maxDoseAcumulated:"444444"},{medicineReferenceId:2,medicineGenericName:"FLUORACILO",unity:"mg",factor:"sc",calRef:"f",via:"oral",presentation:"pre",maxDoseAplicated:"300mg/m2",maxDoseAcumulated:"444444"},{medicineReferenceId:3,medicineGenericName:"FLUORACILO",unity:"mg",factor:"sc",calRef:"f",via:"oral",presentation:"pre",maxDoseAplicated:"300mg/m2",maxDoseAcumulated:"444444"},{medicineReferenceId:4,medicineGenericName:"FLUORACILO",unity:"mg",factor:"sc",calRef:"f",via:"oral",presentation:"pre",maxDoseAplicated:"300mg/m2",maxDoseAcumulated:"444444"},{medicineReferenceId:5,medicineGenericName:"FLUORACILO",unity:"mg",factor:"sc",calRef:"f",via:"oral",presentation:"pre",maxDoseAplicated:"300mg/m2",maxDoseAcumulated:"444444"}];


  constructor(private _fb: FormBuilder) { }

  ngOnInit() {

  console.log("hhhhhhhhhhhJGO")

    		this.myForm = this._fb.group({
            medicineReferenceId: [''],
            lote: [''],
            quantity: [''],
            

        });
  }

    asignar(inf:any) {

        let dados2 =inf;
        console.log(dados2);


    }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-diagnose-patient',
  templateUrl: './diagnose-patient.component.html',
  styleUrls: ['./diagnose-patient.component.css']
})
export class DiagnosePatientComponent implements OnInit {
 public myForm: FormGroup;
 selDiagnose: any= null;
 patients : any[]=[];
 diagnosis : any[]=[];
 schemas : any[]=[];

  private result : any[] = [];

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

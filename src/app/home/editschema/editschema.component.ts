import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-editschema',
  templateUrl: './editschema.component.html',
  styleUrls: ['./editschema.component.scss']
})
export class EditschemaComponent implements OnInit {
 	myForm: FormGroup;

  constructor(private route: ActivatedRoute,
  private router: Router,private _fb: FormBuilder) { }

  ngOnInit() {

      this.myForm = this._fb.group({
            medicine: ['1/FLUORACILO'],
            date: ['08/12/2017'],
            dose: ['50.0'],
            volume: ['78']

        });
        }
  	


}

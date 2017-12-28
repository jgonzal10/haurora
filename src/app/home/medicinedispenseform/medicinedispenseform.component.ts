import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medicinedispenseform',
  templateUrl: './medicinedispenseform.component.html',
  styleUrls: ['./medicinedispenseform.component.css']
})
export class MedicineDispenseFormComponent  {

  
  medicine: any= null;

      constructor(private route: ActivatedRoute) { }

ngOnInit() {
  //  this.route.params.subscribe((params: Params) => this.medicine = params['medicine']);
    this.route.params.subscribe(params => console.log(params));
  //  console.log(this.medicine)
}


}

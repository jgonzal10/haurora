import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicineBrand } from '../../models/medicinebrand';


@Component({
  selector: 'app-medicinedispenseform',
  templateUrl: './medicinedispenseform.component.html',
  styleUrls: ['./medicinedispenseform.component.css']
})
export class MedicineDispenseFormComponent  {

  medicineBrandDispense: MedicineBrand[]=[];
  medicine: any= null;

      constructor(private route: ActivatedRoute) { }

ngOnInit() {
  //  this.route.params.subscribe((params: Params) => this.medicine = params['medicine']);
    this.route.params.subscribe(params => console.log(params));
  //  console.log(this.medicine)


  this.medicineBrandDispense=[
  { medicineBrandId: 1,
    medicineReferenceId: 1,
    medicineComercialName: "FLUORACILO",
    laboratory: "LAB 1",
    lote: "",
    quantity: "",
 },
   { medicineBrandId: 1,
    medicineReferenceId: 1,
    medicineComercialName: "FLUORACILO",
    laboratory: "LAB 1",
    lote: "",
    quantity: "",
 },
   { medicineBrandId: 1,
    medicineReferenceId: 1,
    medicineComercialName: "FLUORACILO",
    laboratory: "LAB 1",
    lote: "",
    quantity: "",
 }
 ];
}


}

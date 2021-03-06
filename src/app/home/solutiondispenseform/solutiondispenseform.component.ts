import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SolutionBrand } from '../../models/solutionbrand';


@Component({
  selector: 'app-solutiondispenseform',
  templateUrl: './solutiondispenseform.component.html',
  styleUrls: ['./solutiondispenseform.component.css']
})
export class SolutionDispenseFormComponent  {

    solutionBrandDispense: SolutionBrand[]=[];
  solution: any= null;

      constructor(private route: ActivatedRoute) { }

ngOnInit() {
  //  this.route.params.subscribe((params: Params) => this.solution = params['solution']);
    this.route.params.subscribe(params => console.log(params));
  //  console.log(this.solution)

  this.solutionBrandDispense = [
{
    solutionBrandId: 1,
    solutionReferenceId: 1,
    solutionGenericName: "DEXTROSA",
    laboratory: "Baxter",
    lote: "",
    quantity: ""
   
}
  ];
}


}

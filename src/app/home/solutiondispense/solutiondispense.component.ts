import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { SolutionDispense } from '../../models/solutiondispense';

@Component({
  selector: 'app-solutiondispense',
  templateUrl: './solutiondispense.component.html',
  styleUrls: ['./solutiondispense.component.css']
})
export class SolutionDispenseComponent implements OnInit {
public myForm: FormGroup;
public solutionSelected;
selectedMedicine: SolutionDispense;

public solutiontotals:SolutionDispense[] = [
    {solutionId: 13545345345345435345345, solutionName:'DEXTROSAC129', total: 45345345},
    {solutionId: 34543, solutionName:'DEXTROSAC129', total: 100043},
    {solutionId: 34543, solutionName:'SNNC128', total: 100043},
    {solutionId: 456546, solutionName:'DEXTROSAC129', total: 100043344},
    {solutionId: 4534543, solutionName:'SNNC128', total: 567100043},
    {solutionId: 65734435543, solutionName:'DEXTROSAC129', total: 567100043},
    {solutionId: 65734543, solutionName:'SNNC128', total: 78100043},

];
    constructor(private _fb: FormBuilder,private router: Router) { }

    ngOnInit() {
   // console.log(this.solutiontotals)
        const controlmed = this.solutiontotals.length;
        this.myForm = this._fb.group({
            name: [''],
            total: ['', [Validators.required, Validators.minLength(5)]],
            dispensations: this._fb.array([
                this.initDispensation(),
            ])
        });
    }

    initDispensation() {
        return this._fb.group({
            solutionBrandId: ['', Validators.required],
            quantity: ['', Validators.required],
            lote: ['']
        });
    }

    addDispensation() {
        const control = <FormArray>this.myForm.controls['dispensations'];
        control.push(this.initDispensation());
    }

    removeDispensation(i: number) {
        const control = <FormArray>this.myForm.controls['dispensations'];
        control.removeAt(i);
    }

    save(model: SolutionDispense) {
        // call API to save
        // ...
        console.log(model);
    }

    clickMedicine(solution){
    console.log(solution)
      
        this.router.navigate(['/solutiondispenseform',solution]);
    }

    onRowSelect(event) {
       console.log(event.data.solutionId );
       console.log(event.data.solutionName );
       console.log(event.data.total );
       this.router.navigate(['/solutiondispenseform',event.data]);
    }

    onRowUnselect(event) {
            console.log(event.data.solutionId );
                   console.log(event.data.solutionName );
       console.log(event.data.total );
    }


 public selectMedicine(event: any, solution: any) {
     

    this.solutionSelected = solution;
    console.log('selected solution')
    console.log(this.solutionSelected)
    this.router.navigate(['solutiondispenseform']);
  }
}

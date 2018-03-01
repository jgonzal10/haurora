import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { PersonalizedSchema } from '../../models/personalizedschema';
 import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nested-form',
  template:
`
<form [formGroup]="myForm" (ngSubmit)="submit()">
  <hr>
  <items-array
    formArrayName="items"
    [itemsFormArray]="myForm.get('items')">
  </items-array>
  <hr>
  <div class="form-group">
    <input type="button" class="form-control" value="Enviar">
  </div>
</form>


`
})
export class EditschemaNestedFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,private route: ActivatedRoute,
  private router: Router
  ) {}

  ngOnInit() {
    // build the form model

    console.log( this.route.params)
    console.log( JSON.stringify(this.route.params))
    this.myForm = this.fb.group({
      items: ItemsFormArrayComponent.buildItems()
    })
  }

  submit() {
    console.log("Reactive Form submitted: ", this.myForm)
  }
}

@Component({
  selector: 'items-array',
  template:
`
<fieldset>
  <div *ngIf="itemsFormArray.hasError('minSum')">
  </div>
  <item-control
    *ngFor="let item of itemsFormArray.controls; let i=index"
    [index]="i" [item]="item" (removed)="itemsFormArray.removeAt($event)">
  </item-control>
</fieldset>
<button type="button" class="btn btn-link" (click)="addItem()">Adicionar Medicamento</button>
`,
  styles: [':host {display:block;}']
})
export class ItemsFormArrayComponent {

  @Input()
  public itemsFormArray: FormArray;

  addItem() {
    this.itemsFormArray.push(ItemFormControlComponent.buildItem(''))
  }

  static buildItems() {
    return new FormArray([
        ItemFormControlComponent.buildItem(''),
        ItemFormControlComponent.buildItem(''),
        ItemFormControlComponent.buildItem(''),
        ItemFormControlComponent.buildItem('')],
        )
  }
}


class ItemsValidators {

  static minQuantitySum(val: number) {
    return (c: AbstractControl) => {
      let sum = c.value
        .map(item => item.quantity)
        .reduce((acc, cur) => acc + cur, 0 );
      if (sum < val) {
        return { minSum: val }
      }
    };
  }
}


@Component({
  selector: 'item-control',
  template:
`
<div class="form-group row" [formGroup]="item">
  <div class="row">
  <div class="col-sm-2">
    <label [attr.for]="'medicine'+index">Ciclo/Medicamento</label>
    <input type="text" class="form-control" formControlName="medicine" value='1/Floru'>
  </div>

  <div class="col-sm-2">
    <label [attr.for]="'date'+index">Fecha</label>
    <input type="date" class="form-control" [attr.id]="'date'+index" formControlName="date">
  </div>
  <div class="col-sm-2">
    <label [attr.for]="'dose'+index">Dosis</label>
    <input type="text" class="form-control" [attr.id]="'dose'+index" formControlName="dose">
  </div>
    <div class="col-sm-2">
    <label [attr.for]="'volume'+index">Volumen</label>
    <input type="text" class="form-control" [attr.id]="'volume'+index" formControlName="volume">
  </div>
  <div class="col-sm-3 py-1">
    <button type="button" class="btn" (click)="removed.emit(index)">-</button>
  </div>
  </div>
</div>
`
})
export class ItemFormControlComponent {

  @Input()
  public index: number;

  @Input()
  public item: FormGroup;

  @Output()
  public removed: EventEmitter<number> = new EventEmitter<number>();

  static buildItem(val: string) {
    return new FormGroup({
      medicine: new FormControl('1/FLUORACILO'),
      date: new FormControl('01/03/2018', Validators.required),
      dose: new FormControl('329', Validators.required),
      volume: new FormControl('500', Validators.required),
      quantity: new FormControl(100)
    })
  }
}
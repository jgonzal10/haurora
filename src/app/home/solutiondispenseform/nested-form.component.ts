import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

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
    <input type="button" class="form-control" value="Enviar Cantidades" [disabled]="myForm?.invalid">
  </div>
</form>


`
})
export class NestedFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // build the form model
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
    Las cantidades ingresadas para DEXTROSA deben sumar no menos que {{ itemsFormArray.getError('minSum') }}.
  </div>
  <item-control
    *ngFor="let item of itemsFormArray.controls; let i=index"
    [index]="i" [item]="item" (removed)="itemsFormArray.removeAt($event)">
  </item-control>
</fieldset>
<button type="button" class="btn btn-link" (click)="addItem()">Adicionar Otra cantidad</button>
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
        ItemFormControlComponent.buildItem('')],
        ItemsValidators.minQuantitySum(3214))
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
  <div class="col-sm-3">
    <label [attr.for]="'solution'+index">Solución</label>
    <input type="text" class="form-control" [attr.id]="'solution'+index" formControlName="solution">
  </div>
    <div class="col-sm-3">
    <label [attr.for]="'lote'+index">Lote</label>
    <input type="text" class="form-control" [attr.id]="'lote'+index" formControlName="lote">
  </div>
  <div class="col-sm-3">
    <label [attr.for]="'quantity'+index">Cantidad</label>
    <input type="number" class="form-control" [attr.id]="'quantity'+index" formControlName="quantity">
  </div>
  <div class="col-sm-3 py-1">
    <button type="button" class="btn" (click)="removed.emit(index)">-</button>
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
      solution: new FormControl(val, Validators.required),
      lote: new FormControl(val, Validators.required),
      quantity: new FormControl(100)
    })
  }
}
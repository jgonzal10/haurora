import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditschemaComponent } from './editschema.component';

describe('EditschemaComponent', () => {
  let component: EditschemaComponent;
  let fixture: ComponentFixture<EditschemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditschemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditschemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

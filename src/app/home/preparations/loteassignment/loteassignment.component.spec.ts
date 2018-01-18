import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteassignmentComponent } from './loteassignment.component';

describe('LoteassignmentComponent', () => {
  let component: LoteassignmentComponent;
  let fixture: ComponentFixture<LoteassignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoteassignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

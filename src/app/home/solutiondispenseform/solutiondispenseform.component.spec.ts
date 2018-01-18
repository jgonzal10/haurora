import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionDispenseFormComponent } from './solutiondispense.component';

describe('SolutionDispenseFormComponent', () => {
  let component: SolutionDispenseFormComponent;
  let fixture: ComponentFixture<SolutionDispenseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionDispenseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionDispenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

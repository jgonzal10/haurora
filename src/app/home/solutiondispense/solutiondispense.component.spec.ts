import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionDispenseComponent } from './solutiondispense.component';

describe('SolutionDispenseComponent', () => {
  let component: SolutionDispenseComponent;
  let fixture: ComponentFixture<SolutionDispenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionDispenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionDispenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

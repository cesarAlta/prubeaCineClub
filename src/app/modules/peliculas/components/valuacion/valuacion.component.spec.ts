import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuacionComponent } from './valuacion.component';

describe('ValuacionComponent', () => {
  let component: ValuacionComponent;
  let fixture: ComponentFixture<ValuacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValuacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

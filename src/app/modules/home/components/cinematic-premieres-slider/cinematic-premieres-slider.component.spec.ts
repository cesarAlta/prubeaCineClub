import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinematicPremieresSliderComponent } from './cinematic-premieres-slider.component';

describe('CinematicPremieresSliderComponent', () => {
  let component: CinematicPremieresSliderComponent;
  let fixture: ComponentFixture<CinematicPremieresSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinematicPremieresSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinematicPremieresSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

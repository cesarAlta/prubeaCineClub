import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselEstreno1Component } from './carousel-estreno1.component';

describe('CarouselEstreno1Component', () => {
  let component: CarouselEstreno1Component;
  let fixture: ComponentFixture<CarouselEstreno1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselEstreno1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselEstreno1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

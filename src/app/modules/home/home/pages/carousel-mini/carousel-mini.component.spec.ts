import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMiniComponent } from './carousel-mini.component';

describe('CarouselMiniComponent', () => {
  let component: CarouselMiniComponent;
  let fixture: ComponentFixture<CarouselMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

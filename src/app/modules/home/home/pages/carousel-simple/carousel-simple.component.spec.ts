import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSimpleComponent } from './carousel-simple.component';

describe('CarouselSimpleComponent', () => {
  let component: CarouselSimpleComponent;
  let fixture: ComponentFixture<CarouselSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

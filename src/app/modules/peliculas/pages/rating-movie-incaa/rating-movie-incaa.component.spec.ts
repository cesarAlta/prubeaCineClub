import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingMovieIncaaComponent } from './rating-movie-incaa.component';

describe('RatingMovieIncaaComponent', () => {
  let component: RatingMovieIncaaComponent;
  let fixture: ComponentFixture<RatingMovieIncaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingMovieIncaaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingMovieIncaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

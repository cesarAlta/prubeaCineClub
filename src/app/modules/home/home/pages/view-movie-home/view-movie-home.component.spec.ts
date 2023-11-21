import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMovieHomeComponent } from './view-movie-home.component';

describe('ViewMovieHomeComponent', () => {
  let component: ViewMovieHomeComponent;
  let fixture: ComponentFixture<ViewMovieHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMovieHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMovieHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

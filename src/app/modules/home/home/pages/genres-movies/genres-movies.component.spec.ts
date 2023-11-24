import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresMoviesComponent } from './genres-movies.component';

describe('GenresMoviesComponent', () => {
  let component: GenresMoviesComponent;
  let fixture: ComponentFixture<GenresMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenresMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenresMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

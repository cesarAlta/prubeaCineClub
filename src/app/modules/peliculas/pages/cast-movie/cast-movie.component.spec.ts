import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastMovieComponent } from './cast-movie.component';

describe('CastMovieComponent', () => {
  let component: CastMovieComponent;
  let fixture: ComponentFixture<CastMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

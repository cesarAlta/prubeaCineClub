import { TestBed } from '@angular/core/testing';

import { CastMovieService } from './cast-movie.service';

describe('CastMovieService', () => {
  let service: CastMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CastMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

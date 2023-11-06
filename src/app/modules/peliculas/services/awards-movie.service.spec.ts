import { TestBed } from '@angular/core/testing';

import { AwardsMovieService } from './awards-movie.service';

describe('AwardsMovieService', () => {
  let service: AwardsMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwardsMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

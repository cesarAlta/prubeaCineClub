import { TestBed } from '@angular/core/testing';

import { RatingMovieServiceService } from './rating-movie-service.service';

describe('RatingMovieServiceService', () => {
  let service: RatingMovieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatingMovieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

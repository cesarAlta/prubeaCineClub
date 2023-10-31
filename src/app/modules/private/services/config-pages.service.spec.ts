import { TestBed } from '@angular/core/testing';

import { ConfigPagesService } from './config-pages.service';

describe('ConfigPagesService', () => {
  let service: ConfigPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { StarDictParserService } from './star-dict-parser.service';

describe('StarDictParserService', () => {
  let service: StarDictParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarDictParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

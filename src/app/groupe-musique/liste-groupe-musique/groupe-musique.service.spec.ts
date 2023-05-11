import { TestBed } from '@angular/core/testing';

import { GroupeMusiqueService } from './groupe-musique.service';

describe('ImportService', () => {
  let service: GroupeMusiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupeMusiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

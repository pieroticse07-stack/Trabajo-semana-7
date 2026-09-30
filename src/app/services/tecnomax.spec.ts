import { TestBed } from '@angular/core/testing';
import { TecnomaxService } from './tecnomax';

describe('TecnomaxService', () => {
  let service: TecnomaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TecnomaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
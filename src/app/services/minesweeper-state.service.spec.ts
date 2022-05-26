import { TestBed } from '@angular/core/testing';

import { MinesweeperStateService } from './minesweeper-state.service';

describe('MinesweeperStateService', () => {
  let service: MinesweeperStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinesweeperStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

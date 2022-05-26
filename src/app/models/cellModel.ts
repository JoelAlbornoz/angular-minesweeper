export class Cell {
  status: 'hidden' | 'mine' | 'flag' | 'proximity' | 'empty' = 'hidden';
  mine = false;
  proximityMines = 0;

  constructor(public row: number, public column: number) { }
}

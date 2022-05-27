export class Cell {
  status: 'hidden' | 'mine' | 'flag' | 'revealed' = 'hidden';
  mine = false;
  proximityMines = 0;

  constructor(public row: number, public column: number) { }
}

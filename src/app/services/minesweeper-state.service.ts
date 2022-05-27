import { Injectable } from '@angular/core';
import { Cell } from '../models/cellModel';
import { StatusModel } from '../models/statusModel';

@Injectable({
  providedIn: 'root'
})
export class MinesweeperStateService {

  public status: StatusModel;
  PEERS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

  constructor() {
    //Se inicializa un estado vacio
    this.status = { grid: [], mines: 0, flags: 0, revealed: 0 };

    //Se genera una grid de 10x10 con 10 minas
    this.buildGrid(10, 10, 10);
  }

  buildGrid(rows: number, columns: number, mines: number) {
    this.status.grid = [];
    this.status.mines = mines;
    this.status.flags = 0;
    this.status.revealed = 0;
    for (let i = 0; i < rows; i++) {
      this.status.grid.push([]);
      for (let j = 0; j < columns; j++) {
        this.status.grid[i].push(new Cell(i, j));
      }
    }
    this.setMines(mines);
  }

  setMines(mines: number) {
    let minesLeft = mines;
    while (minesLeft > 0) {
      let row = Math.floor(Math.random() * this.status.grid!.length);
      let column = Math.floor(Math.random() * this.status.grid![0].length);
      if (!this.status.grid![row][column].mine) {
        this.status.grid![row][column].mine = true;
        minesLeft--;
      }
    }
    this.calculateProximityMines();
  }

  calculateProximityMines() {
    for (let i = 0; i < this.status.grid!.length; i++) {
      for (let j = 0; j < this.status.grid![0].length; j++) {
        if (!this.status.grid![i][j].mine) {
          this.calculateProximityMinesForCell(i, j);
        }
      }
    }
    console.log(this.status.grid);
  }

  calculateProximityMinesForCell(row: number, column: number) {
    let adjacentMines = 0;
    this.PEERS.forEach(peer => {
      let r = row + peer[0];
      let c = column + peer[1];
      //Verificamos que el vecino este dentro del grid
      if (r >= 0 && r < this.status.grid!.length && c >= 0 && c < this.status.grid![0].length) {
        if (this.status.grid![r][c].mine) {
          adjacentMines++;
        }
      }
    });
    this.status.grid![row][column].proximityMines = adjacentMines;
  }

  revealCell(row: number, column: number) {
    if (this.status.grid![row][column].status === 'hidden') {
      if (this.status.grid![row][column].mine) {
        //Game over
      } else {
        //En caso de que la celda esté vacía y sin minas cercanas
        if (this.status.grid![row][column].proximityMines === 0) {
          this.revealEmptyCell(row, column);
        }
        //En caso de que la celda esté vacía y con minas cercanas
        else {
          this.status.grid![row][column].status = 'revealed';
          this.status.revealed!++;
        }
      }
    }
    this.checkTotalRevealedCells();
  }

  checkTotalRevealedCells() {
    if (this.status.revealed === this.status.grid!.length * this.status.grid![0].length - this.status.mines!) {
      //Lógica de victoria
    }
  }

  revealEmptyCell(row: number, column: number) {
    this.status.grid![row][column].status = 'revealed';
    this.status.revealed!++;
    this.PEERS.forEach(peer => {
      let r = row + peer[0];
      let c = column + peer[1];
      //Verificamos que el vecino este dentro del grid y propagamos la revelación
      if (r >= 0 && r < this.status.grid!.length && c >= 0 && c < this.status.grid![0].length) {
        this.revealCell(r, c);
      }
    });
  }

  flagCell(row: number, column: number) {
    if (this.status.grid![row][column].status === 'hidden') {
      this.status.grid![row][column].status = 'flag';
      this.status.flags!++;
    } else if (this.status.grid![row][column].status === 'flag') {
      this.status.grid![row][column].status = 'hidden';
      this.status.flags!--;
    }
  }
}

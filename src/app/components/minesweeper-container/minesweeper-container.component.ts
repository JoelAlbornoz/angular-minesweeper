import { Component, OnInit } from '@angular/core';
import { StatusModel } from 'src/app/models/statusModel';
import { MinesweeperStateService } from 'src/app/services/minesweeper-state.service';

@Component({
  selector: 'app-minesweeper-container',
  templateUrl: './minesweeper-container.component.html',
  styleUrls: ['./minesweeper-container.component.scss']
})

export class MinesweeperContainerComponent implements OnInit {
  grid: any;

  constructor(private mineSweeperService: MinesweeperStateService) {
    this.grid = mineSweeperService.status.grid;
  }

  revealCell(row: number, column: number) {
    this.mineSweeperService.revealCell(row, column);
  }


  ngOnInit(): void {
  }

}

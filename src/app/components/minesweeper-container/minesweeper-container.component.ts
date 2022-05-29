import { Component, OnInit } from '@angular/core';
import { MinesweeperStateService } from 'src/app/services/minesweeper-state.service';

@Component({
  selector: 'app-minesweeper-container',
  templateUrl: './minesweeper-container.component.html',
  styleUrls: ['./minesweeper-container.component.scss']
})

export class MinesweeperContainerComponent implements OnInit {
  grid: any;

  constructor(public mineSweeperService: MinesweeperStateService) {
    this.mineSweeperService.status.gamerunning!.subscribe(status => {
      this.grid = mineSweeperService.status.grid;
    })
  }

  revealCell(row: number, column: number) {
    this.mineSweeperService.revealCell(row, column);
  }

  flagCell(row: number, column: number, event: any) {
    event.preventDefault();
    this.mineSweeperService.flagCell(row, column);
  }


  ngOnInit(): void {
  }

}

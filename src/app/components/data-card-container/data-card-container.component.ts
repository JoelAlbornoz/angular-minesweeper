import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MinesweeperStateService } from 'src/app/services/minesweeper-state.service';

@Component({
  selector: 'app-data-card-container',
  templateUrl: './data-card-container.component.html',
  styleUrls: ['./data-card-container.component.scss']
})
export class DataCardContainerComponent implements OnInit {
  time = new Subject<number>();
  finalTime = new Subject<number>();
  gameRunning = false;
  startedFirstTime = false;

  constructor(public stateService: MinesweeperStateService) {
    this.getStatus()
  }

  getStatus() {
    this.stateService.status.time?.subscribe(t => {
      this.time.next(t);
    })
    this.stateService.status.finalTime?.subscribe(t => {
      this.finalTime.next(t);
    })
    this.stateService.status.gamerunning?.subscribe(b => {
      this.gameRunning = b
    })
  }

  startGame() {
    this.startedFirstTime = true;
    this.stateService.resetGame()
  }

  ngOnInit(): void {
  }

}

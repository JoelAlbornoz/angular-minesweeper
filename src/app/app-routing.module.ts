import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinesweeperContainerComponent } from './components/minesweeper-container/minesweeper-container.component';

const routes: Routes = [
  {
    path: '',
    component: MinesweeperContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

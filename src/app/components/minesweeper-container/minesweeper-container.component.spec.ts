import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinesweeperContainerComponent } from './minesweeper-container.component';

describe('MinesweeperContainerComponent', () => {
  let component: MinesweeperContainerComponent;
  let fixture: ComponentFixture<MinesweeperContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinesweeperContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinesweeperContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

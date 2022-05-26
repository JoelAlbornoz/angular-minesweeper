import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCardContainerComponent } from './data-card-container.component';

describe('DataCardContainerComponent', () => {
  let component: DataCardContainerComponent;
  let fixture: ComponentFixture<DataCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

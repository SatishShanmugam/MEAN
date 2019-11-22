import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRateComponent } from './player-rate.component';

describe('PlayerRateComponent', () => {
  let component: PlayerRateComponent;
  let fixture: ComponentFixture<PlayerRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

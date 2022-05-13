import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivingStateComponent } from './receiving-state.component';

describe('ReceivingStateComponent', () => {
  let component: ReceivingStateComponent;
  let fixture: ComponentFixture<ReceivingStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivingStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivingStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

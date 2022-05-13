import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadedStateComponent } from './loaded-state.component';

describe('LoadedStateComponent', () => {
  let component: LoadedStateComponent;
  let fixture: ComponentFixture<LoadedStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadedStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadedStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

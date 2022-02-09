import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedcalssesComponent } from './sharedcalsses.component';

describe('SharedcalssesComponent', () => {
  let component: SharedcalssesComponent;
  let fixture: ComponentFixture<SharedcalssesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedcalssesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedcalssesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
